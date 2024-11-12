
import { rateLimit } from 'express-rate-limit'
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin only (frontend URL)
  methods: ['GET', 'POST'],        // Specify allowed HTTP methods
  credentials: true                // Include cookies in requests if needed
}));
app.use(express.json());

const otpLimiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutes
	limit: 3 , // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message:"Too many OTP request at the same time, please try again after 5 minutes",
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

const passLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  message:"Too many password reset attempts,please try again after 15 minutes",
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Store OTPs in a simple in-memory object
const otpStore: Record<string, string> = {};

// Endpoint to generate and log OTP
// @ts-ignore
app.post('/generate-otp', otpLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generates a 6-digit OTP
    otpStore[email] = otp;
    
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged" });
  });
  
  // Endpoint to reset password
// @ts-ignore
  app.post('/reset-password', passLimiter, (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }
    if (otpStore[email] === otp) {
      console.log(`Password for ${email} has been reset to: ${newPassword}`);
      delete otpStore[email]; // Clear the OTP after use
      res.status(200).json({ message: "Password has been reset successfully" });
    } else {
      res.status(401).json({ message: "Invalid OTP" });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Signup } from "@repo/ui/Signup";

export default function Home() {
  return (
    <div className="text-3xl font-bold underline">
      <Signup/>
    </div>
  );
}

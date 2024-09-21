import medium from '../assets/medium.svg'
import PostAdd from '../assets/PostAdd.svg'
import { Avtar } from './PostCard'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { searchQueryState } from '../state/searchState';

interface AppbarProps {
    showSearchBar?: boolean;
    showPublish?: boolean;
    showAddPost?: boolean;
    isPublishEnabled?: boolean; // New prop to control button state
    onPublish?: () => void; // New prop for publish button action
}

export const Appbar: React.FC<AppbarProps> = ({ 
    showSearchBar = false, 
    showPublish = false, 
    showAddPost = false,
    isPublishEnabled = false,  // Add default value for isPublishEnabled
    onPublish // Add onPublish function prop
}) => {
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase())
    }
    const name = localStorage.getItem('name');
    return (

        <nav className="border-black border-b-2 flex justify-between px-5 py-3 items-center">
            <div className='flex items-center gap-5'>
                <span className='w-28'>
                    <Link to={'/posts'}>
                        <img src={medium} alt="" />
                    </Link>
                </span>
                {showSearchBar && <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />}
            </div>
            <div className='flex items-center gap-5 pl-5'>
                {showPublish && <button onClick={isPublishEnabled ? onPublish : undefined} type="button" className={`flex justify-center text-white font-medium rounded-full text-sm px-5 py-2.5 text-center ${isPublishEnabled
                            ? 'bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}>Publish</button>}
                {showAddPost && <Link to={'/publish'}>
                    <img className='cursor-pointer' src={PostAdd} alt="" />
                </Link>
                }
                <Avtar name={ name || 'Anonymous'} />
            </div>
        </nav>

    )
}

import {
	faBookmark,
	faClipboard,
	faHome,
	faMessage,
	faStar,
	faUserCircle
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Sidebar({ isOpen, setIsOpen }) {
	return (
		<>
			<div
				className={`h-[10vh] w-full max-w-[320px] min-h-[100vh] overflow-y-hidden pt-2 px-5 pb3 sidebar bg-white shadow-xl transition-transform duration-300 z-50`}>
				<div className="nav-logo text-center py-2">
					<Link href="/" className="cursor-pointer">
						<h1 className="text-3xl font-semibold font-unbounded">
							Learn<span className="text-[#066dca]">Hub</span>
						</h1>
					</Link>
				</div>

				<span className="h-[1.5px] bg-[#dfe0e4] w-full block my-2"></span>
				<p className="text-neutral-500 font-sora tracking-wide y-3">
					Welcome Henry,
				</p>
				<ul className="flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll">
					<li className="py-4 px-4 rounded-xl  active text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/dashboard" className="text-md">
							<FontAwesomeIcon
								icon={faHome}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							Dashboard
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/profile" className="text-md">
							<FontAwesomeIcon
								icon={faUserCircle}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							My profile
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/message" className="text-md">
							<FontAwesomeIcon
								icon={faMessage}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							Message
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/courses" className="text-md">
							<FontAwesomeIcon
								icon={faClipboard}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							Courses
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/wishlist" className="text-md">
							<FontAwesomeIcon
								icon={faBookmark}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							WishList
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/reviews" className="text-md">
							<FontAwesomeIcon
								icon={faStar}
								className="pe-2 text-[#066dca] transition-colors duration-300"
							/>
							Reviews
						</Link>
					</li>
					<li className="py-4 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/settings" className="text-md">
							<i className="ri-settings-5-line pe-2 text-[#066dca] text-[20px] transition-colors duration-300"></i>
							Settings
						</Link>
					</li>
				</ul>
				<ul className="flex  sidebar-nav flex-col justify-end items-start gap-3 w-full  py-5">
					<li className="w-full py-4 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300">
						<Link href="/logout" className="text-md">
							<i className="ri-logout-box-r-line pe-2 text-[#066dca] text-[20px] transition-colors duration-300 w-full "></i>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

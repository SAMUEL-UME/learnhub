"use client";

import { useState } from "react";
import user from "@/public/user.jpg";
import Link from "next/link";
import Image from "next/image";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ setIsOpen }) {
	const [isUserMenuOpen, setIsUserMenuOPen] = useState(false);
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	const toggleUserMenu = () => {
		setIsUserMenuOPen(!isUserMenuOpen);
		setIsNotificationOpen(false);
	};

	const toggleNotification = () => {
		setIsNotificationOpen(!isNotificationOpen);
		setIsUserMenuOPen(false);
	};
	return (
		<>
			<div className="h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">
				<div className="search-box border border-[#dfe0e4] relative h-[45px] hidden lg:flex  items-center rounded-full w-70 outline-none">
					<input
						type="text"
						placeholder="Search"
						className="h-full w-full ps-4 outline-none"
					/>
					<FontAwesomeIcon
						icon={faSearch}
						className="bg-[#066dca] absolute text-white right-0.5 p-3 rounded-[50%]"
					/>
				</div>
				<div
					className="toggle lg:hidden flex cursor-pointer text-2xl"
					onClick={() => setIsOpen(true)}>
					<FontAwesomeIcon icon={faBars} />
				</div>

				<div className="flex gap-3 items-center">
					<span className="border border-[#006dca] hover:bg-[#006dca] hover:text-white px-4 rounded-full py-2 cursor-pointer transition-colors duration-300 hidden lg:flex">
						Create new course
					</span>
					<div
						className="notification cursor-pointer border border-[#c1c4cc] rounded-full min-w-[45px] min-h-[45px] hidden lg:flex justify-center items-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300"
						onClick={toggleNotification}>
						<FontAwesomeIcon icon={faBell} />
						<span className="badge text-xs text-white bg-[#006dca] absolute top-0 right-0 rounded-2xl px-1">
							2
						</span>

						{isNotificationOpen && (
							<ul className="absolute top-14 right-0 z-50 bg-white w-[350px] p-3 flex flex-col gap-2 rounded-2xl shadow-xl animate-fade-in">
								<li className="text-sm text-grey-700">
									<Link
										href={"/"}
										className="w-full flex justify-between items-start">
										<div className="flex items-start">
											<Image src={user} alt="user" className="w-14 h-14" />
											<div>
												<span className="text-[#212529] font-sora sora-font text-lg">
													John Doe
												</span>
												<p className="text-[#4f586d] text-xs">
													You can stitch between dashboards
												</p>
											</div>
										</div>
										<span className="text-[#4f586d] text-xs font-medium">
											23 Mins ago
										</span>
									</Link>
								</li>
							</ul>
						)}
					</div>

					<div className="comment cursor-pointer border border-[#c1c4cc] rounded-[50%] min-w-[45px] min-h-[45px] hidden lg:flex justify-center text-xl p-2 relative hover:bg-[#006dca] hover:text-white transition-colors duration-300">
						<FontAwesomeIcon icon={faCommentDots} />
					</div>
					<div
						className="user cursor-pointer rounded-[50%] w-[50px] h-[50px] flex justify-center items-center relative"
						onClick={toggleUserMenu}>
						<Image src={user} alt={user} className="w-full h-full relative" />
						{isUserMenuOpen && (
							<ul className="absolute top-15 right-0 bg-white w-[200px] p-3 flex flex-col gap-3 rounded-2xl shadow-xl animate-fade-in ">
								<li>
									<Link
										href="/profile"
										className="text-md hover:text-[#006dca] transition-colors duration-300">
										<FontAwesomeIcon icon={faUserCircle} className="pe-2" />
										My Profile
									</Link>
								</li>
								<li>
									<Link
										href="/settings"
										className="text-md hover:text-[#006dca] transition-colors duration-300">
										<i className="ri-settings-5-line pe-2 text-[18px]"></i>
										Settings
									</Link>
								</li>
								<li>
									<Link
										href="/logout"
										className="text-md hover:text-[#006dca] transition-colors duration-300">
										<i className="ri-shut-down-line pe-2 text-[18px]"></i>
										Logout
									</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

"use client";
import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";

export default function DashboardPage() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex min-h-screen">
			<div className="hidden lg:block w-80 flex-shrink-0">
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			{isOpen && (
				<>
					<div
						className="fixed inset-0 bg-black/20 z-40 lg:hidden"
						onClick={() => setIsOpen(false)}
					/>
					<div className="fixed inset-y-0 left-0 w-80 z-50 lg:hidden">
						<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				</>
			)}

			<div className="flex-1 bg-grey-100 min-h-screen overflow-y-auto">
				<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
				<div className="main-content p-5 bg-[#f3f8fe]">
					<Main />
				</div>
			</div>
		</div>
	);
}

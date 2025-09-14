"use client";
import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";

export default function DashboardPage() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="flex min-h-[100vh] h-100vh overflow-y-hidden">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
		</>
	);
}

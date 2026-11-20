import type { Metadata } from "next";
export const metadata: Metadata = { title: "Disclaimer", description: "Important limitations and disclaimers for Toolora tools." };
export default function Disclaimer(){return <div className="container section max-w-3xl"><h1 className="text-4xl font-black">Disclaimer</h1><p className="muted mt-5 leading-7">Toolora tools are provided as-is, without guarantees of accuracy or availability. Always keep original copies of important files and verify outputs before relying on them.</p></div>}

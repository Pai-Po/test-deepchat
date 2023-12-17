"use client";
import Image from "next/image";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

export default function Home() {
  // Need to import the component dynamically as it uses the 'window' property.
  // If you have found a better way of adding the component in next, please create a new issue ticket so we can update the example!
  const DeepChat = dynamic(
    () => import("deep-chat-react").then((mod) => mod.DeepChat),
    {
      ssr: false,
    }
  );
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <DeepChat
        style={{
          borderRadius: "10px",
          width: "100vw",
          height: "100vh",
          fontSize: "1rem",
          paddingTop: "10px",
        }}
        inputAreaStyle={{
          paddingBottom: "10px",
        }}
        stream={true}
        request={{ url: "http://localhost:8080/chat", method: "POST" }}
      />
    </div>
  );
}

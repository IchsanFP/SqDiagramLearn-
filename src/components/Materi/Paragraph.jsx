// src/components/Paragraph.jsx
export default function Paragraph({ children, className = "" }) {
    return (
      <p className={`text-lg font-normal text-justify text-black font-poppins ${className}`}>
        {children}
      </p>
    );
  }
  
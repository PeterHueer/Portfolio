import * as React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function SocialMedia(): JSX.Element {
  return (
    <div className="flex gap-2">
      <FaLinkedin size="18" />
      <FaInstagram size="18" />
    </div>
  );
}

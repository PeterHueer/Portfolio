import Image from "next/image";
import * as React from "react";

export function Brand(): JSX.Element {
  return <Image src="/img/logo.png" width={80} height={23} alt="logo" />;
}

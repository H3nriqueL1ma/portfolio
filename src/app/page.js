"use client"

import Contato from "@/components/Contato";
import DevContent from "@/components/DevContent";
import Menu from "@/components/Menu";
import Projetos from "@/components/Projetos";
import Tecnologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <>
      <Menu />
      <DevContent />
      <Tecnologias />
      <Projetos />
      <Contato />
    </>
  );
}

import Image from "next/image"; 
import ifmt from '../../../_img/ifmt.webp';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
      <Image src={ifmt} height={50}/>
        <h2>EsaLab</h2>
      </div>
      <ul className="sidebar-links">
        <h4>
          <span>Menu Principal</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="#">
            <span className="material-symbols-outlined"> dashboard </span>Painel</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> overview </span>Visão Geral</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> monitoring </span>Análises</a>
        </li>
        <h4>
          <span>Geral</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="#"><span className="material-symbols-outlined"> folder </span>Projetos</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> groups </span>Grupos</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> move_up </span>Transferências</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> flag </span>Relatórios</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined">
              notifications_active </span>Notificações</a>
        </li>
        <h4>
          <span>Conta</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="#"><span className="material-symbols-outlined"> account_circle </span>Perfil</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> settings </span>Configurações</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> logout </span>Sair</a>
        </li>
      </ul>
      <div className="user-account">
        <div className="user-profile">
          <div className="user-detail">
            <h3>Grupo-2</h3>
            <span>Next-Js</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
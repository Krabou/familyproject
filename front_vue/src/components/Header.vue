<template>
  <header role="banner" id="header">
    <a role="link" href="/">
      <figure role="figure" class="logoHeader">
        <img role="img" src="./../assets/logo.gif" alt="logo" />
      </figure>
    </a>
    <nav role="navigation">
      <ul role="list" class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/ads">Annonces</router-link>
        <router-link to="/manage_user">Manage User</router-link>
        <router-link to="/connexion">Connexion</router-link>

        <!-- <li role="listitem"><a role="link" class="anchor is-clickable" href="/carte">Carte</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/tutoriel">Tutoriel</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/inscription">Inscription</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/connexion">Connexion</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/profil">Profil</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/messagerie">Messages</a></li>
            <li role="listitem"><a role="link" class="anchor is-clickable" href="/dashboard">Dashboard</a></li>
        <li role="listitem"><a role="link" class="anchor is-clickable" href="/deconnexion">Déconnexion</a></li>-->
      </ul>
      <div class="burger is-clickable">
        <span></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: row;
  height: 140px;
  justify-content: space-between;
  padding: 0 6vw;
  top: 0;
  width: 100%;
  z-index: 3;
}

.header-active {
  border-bottom: gray 1px solid;
  height: 80px;
  position: fixed;
  top: 0;
}

header > a {
  align-items: center;
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.logoHeader > img {
  width: 100%;
}

/*MENU*/

header > nav > ul > router-link {
  color: black;
  font-family: "Gilroy";
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  text-decoration: none;
}

header > nav > ul > router-link::after {
  background: transparent;
  content: "";
  display: block;
  height: 2px;
  margin: auto;
  transition: width 0.5s ease, background color ease;
  width: 0;
}

header > nav > ul > router-link:hover:after {
  background: grey;
  width: 100%;
}

.is-active {
  border-bottom: grey solid 2px;
}

@media screen and (min-width: 1225px) {
  header > nav {
    width: 55vw;
  }

  header > nav > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
  }
}

@media screen and (max-width: 200px) {
  .nav-links {
    align-items: center;
    background: rgba(230, 230, 230, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 92vh;
    position: absolute;
    list-style: none;
    right: 0;
    top: 8vh;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
    width: 50%;
    z-index: 2;
  }

  .nav-active {
    transform: translateX(0%);
  }

  body {
    overflow-x: hidden;
  }

  .burger {
    display: block;
    height: 42px;
    position: relative;
    width: 42px;
    z-index: 3;
  }

  .burger span {
    background: black;
    display: block;
    height: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .burger span::before,
  .burger span::after {
    background: black;
    content: "";
    height: 4px;
    position: absolute;
    transition: background 1s ease-in-out;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }

  .burger span::before {
    transform: translateY(-10px);
  }

  .burger span::after {
    transform: translateY(10px);
  }

  /*premier span*/
  .burger.active span::before {
    transform: translateY(0px) rotateZ(45deg);
  }

  /*2eme span*/
  .burger.active span {
    background: transparent;
  }

  /*dernier span*/
  .burger.active span::after {
    transform: translateY(0px) rotateZ(-45deg);
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
}

.logoHeader {
  height: 10vh;
  margin-right: 30px;
  width: 10vh;
}

.header-active > a > .logoHeader {
  height: 8vh;
  width: 8vh;
}
</style>
class NavBar extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #443625;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 15px 0;
          border-top: 6px solid #ddd;
          border-radius: 20px 20px 0 0;
          z-index: 999;
          box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar a {
          color: #ca9e22;
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          transition: color 0.3s;
          border: 2px solid transparent;
          padding: 10px 15px;
          border-radius: 10px;
          width: 100%;
        }
        .navbar a:hover {
          color: #dd7600;
          border-color: #ffffb74d;
        }
      </style>
      
      <div class="navbar">
        <a href="/">Home</a>
        <a href="/anime">Anime</a>
        <a href="/manga">Manga</a>
        <a href="/fanart">Fanart</a>
        <a href="/about">About</a>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
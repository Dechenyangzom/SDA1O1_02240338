class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['header', 'footer', 'background-color', 'border-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const header = this.getAttribute('header') || 'Default Header';
        const footer = this.getAttribute('footer') || 'Default Footer';
        const backgroundColor = this.getAttribute('background-color') || '#fff';
        const borderColor = this.getAttribute('border-color') || '#000';

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background-color: var(--background-color, ${backgroundColor});
                    border: 1px solid var(--border-color, ${borderColor});
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    max-width: 300px;
                    margin: 16px;
                    font-family: Arial, sans-serif;
                }
                .header {
                    background: #f0f0f0;
                    padding: 16px;
                    font-weight: bold;
                }
                .content {
                    padding: 16px;
                }
                .footer {
                    background: #f0f0f0;
                    padding: 16px;
                    text-align: right;
                }
            </style>
            <div class="card">
                <div class="header">
                    <slot name="header">${header}</slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
                <div class="footer">
                    <slot name="footer">${footer}</slot>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-card', CustomCard);
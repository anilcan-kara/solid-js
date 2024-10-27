import { createEffect, createSignal } from 'solid-js';

import styles from './App.module.css';
import logo from './logo.svg';

function App() {
    const [count, setCount] = createSignal(0);
    const [count2, setCount2] = createSignal(0);

    createEffect(() => {

        setInterval(() => {
            setCount(count() + 1);
        }, 1);

        setInterval(() => {
            setCount2(count2() + 1);
        }, 1000);
    });

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />

                <p>
                    Edit <code>src/App.jsx</code> and save to reload.
                </p>

                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    A Learn Solid
                </a>

                <div>
                    <button onClick={() => setCount(count() + 1)}>
                        Count: {count()}
                    </button>
                </div>

                <div>
                    <button onClick={() => setCount2(count2() + 1)}>
                        Count: {count2()}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
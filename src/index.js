import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Main from "./main";
import './style.css';

const task = ReactDOMClient.createRoot(document.getElementById("task"))
task.render(<Main/>)
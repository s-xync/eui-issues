import "./stylesheets/eui_theme_light.css"; // copied from the repo
import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

import AppEntryPoint from "./AppEntryPoint";
import React from "react";
import { render } from "react-dom";

render(<AppEntryPoint />, document.getElementById("root"));

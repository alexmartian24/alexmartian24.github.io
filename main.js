import { Seasons, Tree } from "./utils/tree.js";
import { Button } from "./utils/button.js";

const lightBlue = "#89adf5";
const groundColor = "#1c2902";
const groundY = (height) => height - 80;
const treeHeight = (height) => height - 330;

export const main = (p) => {
    let tree;
    let aboutButton;

    p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        tree = new Tree(250, treeHeight(p.height), Seasons.Spring, groundY(p.height), p);
        
        aboutButton = new Button(
            p.width,
            p.height,
            (x) => x / 2,
            (_y) => 200,
            80,
            "about/index.html",
            "static/buttons/about.svg",
            p,
        );
    };

    p.draw = () => {
        p.noStroke();
        p.imageMode(p.CENTER, p.CENTER);
        
        // Background
        p.background(lightBlue);
        
        // Tree
        tree.render();
        
        // About button
        aboutButton.render();
        
        // Ground
        p.fill(groundColor);
        p.rect(0, groundY(p.height), p.width, p.height);
        
        // Bee cursor
        p.push();
        p.translate(p.mouseX, p.mouseY);
        p.fill("white");
        p.ellipse(-15, -10, 15, 20);
        p.ellipse(-10, -13, 15, 20);
        p.fill("yellow");
        p.ellipse(0, 0, 40, 30);
        p.fill("black");
        p.rect(-5, -15, 10, 30);
        p.pop();
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        tree.update(250, treeHeight(p.height), groundY(p.height));
        aboutButton.update(p.width, p.height);
    };

    p.mouseClicked = () => {
        aboutButton.click();
    };
    
    p.touchStarted = () => {
        aboutButton.click();
    };
};

new p5(main, document.getElementById("sketch"));

import dynamic from 'next/dynamic'
import { click, genSetup, genPreload, draw } from '../utilities/drawfuncs';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), { ssr: false })
//Draw p5.js stuff
function Draw() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    genSetup(p5, window.innerWidth, window.innerHeight)
  }

  const resize = p5 => {
    p5.clear()
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
    genSetup(p5)
  }

  const handleclick = p5 => {
    click(p5)
  }

  return <Sketch setup={setup} 
                 preload={genPreload} 
                 draw={draw} 
                 windowResized={resize} 
                 mouseClicked={handleclick} 
                 touchStarted={handleclick} />
}


export default Draw
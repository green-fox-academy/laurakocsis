import { Flower } from "./flower"
import { Tree } from "./tree"
import { Garden } from "./garden"

let virágosKert = new Garden('VirágosKert');

virágosKert.addPlants(new Flower('yellow'));
virágosKert.addPlants(new Flower('blue'));
virágosKert.addPlants(new Tree('purple'));
virágosKert.addPlants(new Tree('orange'));

virágosKert.plantInfo();

console.log('');

virágosKert.watering(40);

console.log('');

virágosKert.watering(70);

// Params: issue location, array of like locations, viewer location;
// Algorithm: some linear combination of the 3 subscores
// = = Closeness subscore: represents how close the issue is to
// the community. The lower the difference in distance between the issue
// location and like locations, the greater the score will be.
// = = Population subscore: is equal to number of like
// = = Relevance subscore: uses difference in location from viewer to 
// to assign subscore. Issues closer to viewers should score higher

import { getDistance } from 'geolib';

function StrictlyDecreasingFx(x, k, j, b) {
    if (x < 0) {
        return StrictlyDecreasingFx(0, k, j, b);
    }
    return k / (j*x + 1) + b
}

const kCloseness = 1, kPopulation = 1, kRelevance = 1;

// Every location should include the structure { latitude: <some latitude>, longitude: <some longitude> }

const TrimLocation = (locationObject) => { 
    const newObject = {};
    newObject.latitude = locationObject.latitude
    newObject.longitude = locationObject.longitude
    return newObject;
 }

export default function ScoringAlgo(issueLocation, likeLocations, viewerLocation) {
    const issueLoc = TrimLocation(issueLocation);
    const likeLocs = likeLocations.map(location => TrimLocation(location));
    const viewerLoc = TrimLocation(viewerLocation);
    console.log("From algo");
    console.log(issueLocation);
    console.log(issueLoc);

    const closeness = kCloseness * likeLocs.map(location => StrictlyDecreasingFx(getDistance(location, issueLoc), 7, 1, 1)).reduce((a, b) => a + b)
    const population = kPopulation * likeLocs.length;
    const relevance = kRelevance * StrictlyDecreasingFx(getDistance(issueLoc, viewerLoc), 4, 1, 0.4)

    return closeness + population + relevance;
}
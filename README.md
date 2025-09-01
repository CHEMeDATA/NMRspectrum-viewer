# NMRspectrum-viewer

This repository contains the relevant source code, schema definitions, tests, and documentation related to the project described in the title above.

The content is currently being migrated from the [J-graph repository](https://github.com/NMReDATAInitiative/J-graph), where development originally took place.


cat /Users/djeanner/git/MnovaJson-reader/src/nmrAssignement.js | sed 's/graphBase.js/viewerBase.js/g' | sed 's/GraphBase/ViewerBase/g' > src/nmrAssignement.js


cp /Users/djeanner/git/MnovaJson-reader/src/updateColumnsPositions.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/updateColumnsAction.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/updateBlockPosition.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/assignedCouplings.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/getJgraphColor.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/jmolInterface.js src/
cp /Users/djeanner/git/MnovaJson-reader/src/getJisOK.js src/



mkdir -p html
cp /Users/djeanner/git/schema/html/jGraphObject.html html
node hidden/install.js all html/src

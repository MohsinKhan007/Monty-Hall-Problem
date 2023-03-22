"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MontyHall {
    constructor(simulationNumber, changeDoor) {
        this.getSimulationStats = () => {
            let winningResults;
            winningResults = this.simulationResult.filter((gameResult) => gameResult).length;
            return {
                winningCount: winningResults,
                losingCount: this.simulationResult.length - winningResults,
            };
        };
        this.createInitialArray = () => {
            this.doorArray = [true, false, false];
            const array = this.doorArray;
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.doorArray = array;
        };
        this.simulationResult = new Array(simulationNumber);
        this.changeDoor = changeDoor;
        this.simulationNumber = simulationNumber;
    }
    startSimulations() {
        try {
            for (let i = 0; i < this.simulationNumber; i++) {
                this.createInitialArray();
                this.getSelectedRandom();
                let openedDoorIndex = this.openGoatDoor();
                this.simulationResult[i] = this.switchOrStick(openedDoorIndex);
            }
        }
        catch (e) {
            throw new Error(e);
        }
    }
    getSimulationResult() {
        let simulationStats = this.getSimulationStats();
        return {
            winningArray: this.simulationResult,
            getSimulationStats: simulationStats,
        };
    }
    switchOrStick(openedDoorindex) {
        let winOrLose;
        if (this.changeDoor) {
            for (let i = 0; i < this.doorArray.length; i++) {
                if (i !== openedDoorindex && i !== this.selectedDoor) {
                    winOrLose = this.doorArray[i];
                }
            }
        }
        else {
            winOrLose = this.doorArray[this.selectedDoor];
        }
        return winOrLose;
    }
    getSelectedRandom() {
        this.selectedDoor = Math.floor(Math.random() * 3);
    }
    openGoatDoor() {
        let openedDoorIndex;
        for (let i = 0; i < this.doorArray.length; i++) {
            if (i !== this.selectedDoor && this.doorArray[i] == false) {
                openedDoorIndex = i;
            }
        }
        return openedDoorIndex;
    }
}
exports.default = MontyHall;
//# sourceMappingURL=MontyHall.js.map
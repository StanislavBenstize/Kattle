function FuncForKattle() {
   this.work = function () {
      if (this.currentVolumeWater > 0 && this.currentVolumeWater <= 5) {
         return "Kattle start boiling";
      }
      return "Kattle is empty, please add water";
   };
   this.addWater = function (value) {
      if (
         this.currentVolumeWater <= this.volume &&
         this.currentVolumeWater + value <= this.volume
      ) {
         return `${"Your kattle has"} ${(this.currentVolumeWater +=
            value)} ${"liter!"}`;
      }
      return `${"You want to add too mach water! Enough!"} ${"Your kattle has"} ${
         this.currentVolumeWater
      } ${"liter"}`;
   };
   this.subWater = function (value) {
      if (this.currentVolumeWater > 0 && this.currentVolumeWater - value >= 0) {
         return `${"Your kattle has"} ${(this.currentVolumeWater -= value)} ${"liter!"}`;
      }
      if (this.currentVolumeWater - value < 0 || this.currentVolumeWater === 0) {
         return "Your kattle is empty";
      }
      return `${"You lose all water.Now your kattle is empty"}`;
   };
}
function Kattle(color, volume) {
   this.color = color;
   this.volume = volume;
   this.currentVolumeWater = 0;
}

Kattle.prototype = new FuncForKattle();




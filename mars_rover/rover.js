var myRover = {
  position: [0,0],
  direction: 'N'
};

var gridArray= new Array(10);
for (var i = 0; i < 10; i++) {
  Array[i]= new Array(10);
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  if (rover.position[0]< 0 ) {
    rover.position[0] += 10;

  } if (rover.position[0] > 9); {
    rover.position[0] -= 10;
  }

  if (rover.position[1]< 0); {
    rover.position[1] += 10;
  }
  if (rover.position[1] > 9); {
    rover.position[1] -= 10;

  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


    function goBack(rover) {
      switch(rover.direction) {
        case 'N':
          rover.position[0]--;
          break;
        case 'E':
          rover.position[1]--;
          break;
        case 'S':
          rover.position[0]++;
          break;
        case 'W':
          rover.position[1]++;
          break;
      }

      if (rover.position[0]< 0 ) {
        rover.position[0] += 10;

      } if (rover.position[0] > 9); {
        rover.position[0] -= 10;
      }

      if (rover.position[1]< 0); {
        rover.position[1] += 10;
      }
      if (rover.position[1] > 9); {
        rover.position[1] -= 10;

      }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
    }


      function goLeft(rover) {
        switch(rover.direction) {
          case 'N':
            rover.direction = 'W';
            break;
          case 'E':
            rover.direction = 'N';
            break;
          case 'S':
            rover.direction = 'E';
            break;
          case 'W':
            rover.direction = 'S';
            break;
        }


        function goRight(rover) {
          switch(rover.direction) {
            case 'N':
              rover.direction = 'E';
              break;
            case 'E':
              rover.direction = 'S';
              break;
            case 'S':
              rover.direction = 'W';
              break;
            case 'W':
              rover.direction = 'N';
              break;
          }

      }
       var directions = prompt('Tell The rover where to go using f - Forward, b - Backword, L - Left, r - Right.');
      var roverCommands = roverCommands.split;
    for (var i = 0; i < roverCommands.length; i++) {
      if (roverCommands[i] == 'f') {
        goForward(myRover);
      }
     else if (roverCommands[i] == 'b') {
      goBack(myRover);
    }else if (roverCommands[i] == 'r') {
       goRight(myRover);
     }else if (roverCommands[i] == 'l') {
       goLeft(myRover);
     }
     else {
       alert('YOU CRASHED!');
     }
}
}
  console.log("New Rover Position: [ + rover.position[0] + ", " + rover.position[1] + ]");

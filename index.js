

function saturdayFun(activity= "roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity1 = "go to the office") {
    return `This Monday, I will ${activity1}.`;
}

const wrapAdjective = function(way="*") {
    return function(default1 = "special") {
      return `You are ${way}${default1}${way}!`
    }
}

wrapAdjective()
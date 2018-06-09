pragma solidity ^0.4.17;

contract ToDo {
  string public taskTitle;

  function ToDo(string initialTitle) public {
    taskTitle = initialTitle;
  }

  function setTask(string newTitle) public {
    taskTitle = newTitle;
  }
}

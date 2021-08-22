pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() public {
        manager = msg.sender; //msg is a global objevt,  see gameInst.txt for detail.
    }

    function enter()
        public
        payable
    //when we expect to recive some ether when calling function we make it payable
    {
        require(msg.value > .01 ether); //if requires return false then function willl be exited without changes other wise it can access function use for validation
        players.push(msg.sender);
    }

    function random()
        private
        view
        returns (
            uint256 //none can access thi just fetch value
        )
    {
        return uint256(keccak256(block.difficulty, now, players)); //keccak256 or sha3 is the same. sha3 is like class and keccak256 is one of the object. It returns a hash so convert it into int number
        //now gives current time
        //block.difficulty is a number
    }

    function pickWinner() public onlyManagerCanCall {
        uint256 index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address[](0); //(0) shows we initalize array with inital size of 0
        //transfer method is used by address dt to transfer money
        // this points the current contratct instacne
        //balance tells the money, this contract contains
        //empty array when game is finished
    }

    //manager is just like funciton to save from repeated code
    modifier onlyManagerCanCall() {
        require(msg.sender == manager);
        _; //underscore here is like a place holder jaha above checking kay baad ka code chaalay ga
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}

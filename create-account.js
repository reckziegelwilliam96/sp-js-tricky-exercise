function createAccount(pin, amount) {

    let initialPin = checkValidPin(pin) ? pin : invalidPin();
    let initialBalance = amount;

    function invalidPin(){
        return "Invalid PIN";
    }

    function checkValidPin(checkPin) {
        let pinArr = checkPin.split('');

        if (pinArr.length !== 4) {
            return false;
        }

        for (let i = 0; i < pinArr.length; i++) {
            if (!Number.isInteger(parseInt(pinArr[i]))) {
                return false;
            }
        }
        return true;
    }

    return {
            checkBalance: function (pin){
            if (checkValidPin(pin) === false){
                invalidPin()
            };
        
            return initialBalance;
        },
            deposit: function(pin, depositAmount){
            if (checkValidPin(pin) === false){
                invalidPin()
            };
        
            initialBalance += depositAmount;
        
            return "Successfully deposited $" + depositAmount + ". Current balance: $" + initialBalance;
        },
            withdraw: function(pin, withdrawalAmount){
            if (checkValidPin(pin) === false){
                invalidPin()
            };
        
            if (withdrawalAmount > initialBalance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            initialBalance -= withdrawalAmount;
            return "Successfully withdrew $" + withdrawalAmount + ". Current balance: $" + initialBalance;
        },
            changePin: function(pin, newPin){
            if (checkValidPin(pin) === false){
                invalidPin()
            }   
            initialPin = checkValidPin(newPin) ? newPin : invalidPin();
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };

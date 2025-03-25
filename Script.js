Here's an example of a `script.js` file 
// Variables
let vcnName = "My Virtual Cloud Network";
let subnetCount = 3;
let routingEnabled = true;
let loadBalancerCount = 2;

// Console messages
console.log("VCN Name:", vcnName);
console.log("Subnet Count:", subnetCount);
console.log("Routing Enabled:", routingEnabled);
console.log("Load Balancer Count:", loadBalancerCount);

// Conditional statement
if (routingEnabled) {
  console.log("Routing is enabled.");
} else {
  console.log("Routing is disabled.");
}

// Loop
for (let i = 0; i < subnetCount; i++) {
  console.log(`Subnet ${i + 1} is configured.`);
}

// Function
function displayVCNInfo() {
  console.log("VCN Information:");
  console.log("Name:", vcnName);
  console.log("Subnet Count:", subnetCount);
  console.log("Routing Enabled:", routingEnabled);
  console.log("Load Balancer Count:", loadBalancerCount);
}

// Call the function
displayVCNInfo();
```

This script demonstrates variables, console messages, conditional statements, loops, and functions. Let me know if you have any specific coding tasks or questions!

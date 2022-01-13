var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == (x.length - 1)) {
    console.log("Here");
    document.getElementsByClassName("regMess")[0].style.display="none";
    const form=document.getElementById("regForm").submit();
    window.location.href="thankyou.html";
  }
}

function nextPrev(n) {
  setTimeout(()=>{ // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  showTab(currentTab);
},800);
} 

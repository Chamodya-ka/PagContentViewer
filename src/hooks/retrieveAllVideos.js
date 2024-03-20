export async function RetrieveAllVideosList(setFileList){
    // const fetchFileList = async() => {
        try {
            // Make a GET request using the Fetch API
            const response = await fetch('http://localhost:8081');
            
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            // Parse the JSON data from the response
            const result = await response.json();
      
            // Update the state with the fetched data
            setFileList(JSON.parse(result));
        
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        // };
      
}
import axios from "axios";



















export async function getRequestToken() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/authentication/token/new",
      headers: {
        accept: "application/json",
        Authorization:
        `Bearer ${import.meta.env.VITE_API_TOKEN}` 
       },
    };
    try {
      const res = await axios.request(options);
      console.log(res)
      if (res.data.request_token){
        const authWindow = window.open(
            `https://www.themoviedb.org/authenticate/${res.data.request_token}`,
            "_blank"
          );
          pollForApproval(res.data.request_token, authWindow) 
           }
    } catch (err) {
      return err;
    }
  }
function pollForApproval(requestToken, authWindow){
    const interval = setInterval(async()=>{
        try{
            const sessionId = await createSessionId(requestToken)
            if (sessionId){
                console.log('session id', sessionId)
                localStorage.setItem("session_id", sessionId)
                if (authWindow) authWindow.close()
                    window.location.href = "trending";
                clearInterval(interval)
            }
        }catch(err){
            console.log('... waiting')
        }

    }, 3000)
}
  async function createSessionId(requestToken){
    const options = {
        method: 'POST',
        url: "https://api.themoviedb.org/3/authentication/session/new",
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization:
          `Bearer ${import.meta.env.VITE_API_TOKEN}`
          },
        data: JSON.stringify({ request_token: requestToken }),
      };
      
      const res = await axios.request(options)
      if (res.data.session_id) {
        console.log(res)
        return res.data.session_id;
      }
       
  }
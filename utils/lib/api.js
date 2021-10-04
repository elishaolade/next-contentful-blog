export async function getAllPostsForHome() {
    const res = await fetch('https://cdn.contentful.com/spaces/nffk81gx9ld1/environments/master/entries?',
    {
      method:'GET',
      headers: {
        "Content-Type":"application/json",
        Authorization: "Bearer 8WRovs5t3MdXOs9lnZ6EC4aqVKkNpVBa-wOs935BvHw"
      }
    })
    .then(response => response.json());
    return res;
}
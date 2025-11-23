export default function BlogPage({params}:any){
  const postId = (await params).blogsId;//[2,1,2]
  return <div>
    Blog page{JSON.stringify(postId)}
  </div>
}
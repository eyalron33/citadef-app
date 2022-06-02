import { marked } from "marked";  
import { Helmet } from 'react-helmet'
import Fish from "../fish"
import EditButton from "./EditButton";

function getMarkdownText(postText) {
    // take post markdown for fishes object, if object, seed or post doesn't exist, set empty text
    let rawMarkup ="" ;
    try {
        
        const regex = /(\n#|^#)/gi;
        postText = postText.replace(regex, '$1#')
        rawMarkup = marked.parse(postText);
    } catch {

    }
    
    return { __html: rawMarkup };
}

function SinglePostPage(props) {

    const fish = props.fish
    const postText = fish.posts[props.post].text
    
    const markdownPostText = getMarkdownText(postText)




    return ( 
        <div>
        <Helmet>
          <title>A post by {fish.nick}</title>
        </Helmet>
        <section id="section-collections" className="pt30 pb30 top-100">
            <div id="content" className="container">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex">
                       <div >
                            <div>
                                <div className="profile_avatar d-flex">
                                    <div>
                                        <div className="mb-20">
                                            <h4>
                                                <p>Post by {fish.nick}</p>   
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <EditButton seed={props.seed} walletAddress={props.walletAddress} fishOwners={props.fishOwners} post={props.post} />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                       <div >
                            <div>
                                <div className="profile_avatar d-flex">
                                    <div>
                                        <div className="mb-20">
                                            <Fish seed={props.seed} size="100" direction="left"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
            
                <section id="section-collections" className="pt30 pb30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                               <div dangerouslySetInnerHTML={markdownPostText} />
                            </div>
                        </div>            
                    </div>
                </section>
            </div>

                          
    )
}

export default SinglePostPage;

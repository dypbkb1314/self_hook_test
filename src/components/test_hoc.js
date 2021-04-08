import React from 'react';

const DataSource = {
    getList: function(){

    },
    getBlogPost: function(){

    }
}

class ComList extends React.Component{
    constructor(props){
        super(props)
        this.handleChange= this.handleChange.bind(this)
        this.state={
            comList: DataSource.getList()
        }
    }
    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange)
    }
    handleChange(){
        this.setState({
            comList: DataSource.getList()
        })
    }
    render(){
        return(
            <div>
                {
                    this.comList && this.comList.length && this.comList.map((i)=>{
                        return (
                            <Coment comment={i} key={i.id}/>
                        )
                    })
                }
            </div>
        )
    }
}

class BlogPost extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state={
            blogPost: DataSource.getBlogPost(props.id)
        }
    }
    componentDidMount(){
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange)
    }
    handleChange(){
        this.setState({
            blogPost: DataSource.getBlogPost(props.id)
        })
    }
    render(){
        return (
            <BlogPost blogpost={this.state.blogPost}/>
        )
    }
}

const CommentListWithSubscription = HocTw(ComList, (DataSource) => DataSource.getList());
const BlogPostWithSubscription = HocTw(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id));

function HocPost(WrapComponent, SelectData){
    class HocTw extends React.Component{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: SelectData(DataSource, props)
            }
        }
        
        componentDidMount() {
            DataSource.addChangeListener(this.handleChange)
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange)
        }

        handleChange() {
            this.setState({
                data: SelectData(DataSource, this.props)
            })
        }

        render(){
            const { data } = this.state;
            return (
                <WrapComponent data={data} {...this.props}/>
            )
        }
    }
    return HocTw;
}

/*
    * 高阶组件不会不会修改传入的组件，也不会使用继承来复制其行为
    * Hoc是纯函数，不会有副作用，将组件包含在容器组件中形成新的组件
    * 被包装组件接受所有容器组件中的prop
    * 容器组件不需要关心数据的来源及使用方式
    * 不要在容器组件中修改传入组件的原型
    * 通过组合的方式修改传入的组件，相当于增强原组件的功能
*/
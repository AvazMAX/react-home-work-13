export const  getBackgroundColor = (props)=>{
    return props.variant === "container"?'#8a2b06':'#fff';
    }
    export const getBorderRadius = (props)=>{
        return props.borderRadius === "rounder"?'20px':'6px'
    }
    export const getColor = (props)=>{
        return props.variant === "container"?'#fff':'black'
    }
    export const getBorder = (props)=>{
        return props.variant === "container"?'none':'1px solid black'
    }
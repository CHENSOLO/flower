// components/posts/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    res: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * 组件的使用者
   * 定义事件
   */
  methods: {
    onTap(event){
      // console.log(event.currentTarget.dataset.postId)
      //事件的对象
      // console.log(event)
      // console.log(event.currentTarget.dataset.postid)
      // 页面数据传递通常使用url传递
      const pid = this.properties.res.postId
    //   wx.navigateTo({
    //     url: '../post-detail/post-detail?pid='+pid,
    //   })
        this.triggerEvent('posttap',{
            pid,
            test:1
        })
    },
  }
})

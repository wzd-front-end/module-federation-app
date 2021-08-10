export const Config = [
  {
    path: '/jf-platform-api/admin',
    key: 'basics',
    name: '基础配置',
    icon: 'CompassOutlined',
    children: [
      {
        name: '存储配置',
        path: '/store',
      }
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'appManage',
    name: 'app后台管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: 'IOS版本更新',
        path: '/app_ios',
      },
      {
        name: '安卓版本更新',
        path: '/app_addroid',
      },
      {
        name: 'APP广告开屏管理',
        path: '/app_ad',
      },
      {
        name: 'APP首页管理',
        path: '/app_index',
      },
      {
        name: 'APP2.0首页管理',
        path: '/app_module',
      },
      {
        name: 'APP消息推送',
        path: '/app_push',
      },
      {
        name: 'APP消息推送配置',
        path: '/app_push_setting',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'fkConfigure',
    name: '方块养成配置',
    icon: 'CompassOutlined',
    children: [
      {
        name: '基础配置',
        path: '/lucky_pig/index/0',
      },
      {
        name: '寻宝配置',
        path: '/lucky_pig/treasure',
      },
      {
        name: '装扮配置',
        path: '/lucky_pig/dress_up',
      },
      {
        name: '留言管理',
        path: '/lucky_pig/msg',
      },
      {
        name: '榜单导出',
        path: '/lucky_pig/export',
      },
      {
        name: '方块运营补偿',
        path: '/lucky_pig/exp',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'goodsManage',
    name: '商品管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '商品管理',
        path: '/goods_list',
      },
      {
        name: '类目管理',
        path: '/category_list',
      },
      {
        name: '积分兑换商品列表',
        path: '/ex_goods_list',
      },
      {
        name: '积分夺宝商品列表',
        path: '/group_goods_list',
      },
      {
        name: '兑换商品库存增补任务',
        path: '/stock/ex/0',
      },
      {
        name: '夺宝商品库存增补任务',
        path: '/stock/rob/0',
      },
      {
        name: '抽奖商品库存增补任务',
        path: '/stock/draw/0',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'orderManage',
    name: '订单管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '订单查询',
        path: '/query_order',
      },
      {
        name: '待发货订单',
        path: '/undelivered_order',
      },
      {
        name: '已发货订单',
        path: '/delivered_order',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'shoppingMall',
    name: '商城2.0',
    icon: 'CompassOutlined',
    children: [
      {
        name: '类目管理',
        path: '/product_category',
      },
      {
        name: '严选商品列表',
        path: '/yx_goods_list/0',
      },
      {
        name: '严选对接配置',
        path: '/yx_config',
      },
      {
        name: '订单管理',
        path: '/shop_order',
      },
      {
        name: '数据导出',
        path: '/data_export',
      },
      {
        name: '优惠券管理',
        path: '/coupon_manage',
      },
      {
        name: '商城优惠券管理',
        path: '/shop_coupon_manage',
      },
      {
        name: '运营发放优惠券',
        path: '/system_coupon_manage',
      },
      {
        name: '奇遇折扣屋',
        path: '/discount_house/0',
      },
      {
        name: '卡牌秒杀活动后台',
        path: '/flush_sale/0',
      },
      {
        name: '一键加购管理',
        path: '/batch_add_goods',
      },
      {
        name: '凑单专区',
        path: '/order_making_up',
      },
      {
        name: '商城首页管理',
        path: '/mall_home_manage',
      },
      {
        name: '盲盒配置',
        path: '/blind_box',
      },
      {
        name: '盲盒订单',
        path: '/blind_box/order',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'welfareManage',
    name: '福利管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '福利栏目',
        path: '/column_list',
      },
      {
        name: '抽奖管理',
        path: '/lottery',
      },
      {
        name: '必中抽奖管理',
        path: '/must_hit'
      },
      {
        name: '竞拍管理',
        path: '/auction/0',
      },
      {
        name: '竞拍短信验证配置',
        path: '/auction_config',
      },
      {
        name: '限时兑换',
        path: '/time_limit_good',
      },
      {
        name: '奇遇榜设置',
        path: '/lucky_list_setting',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'activityManage',
    name: '活动管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '活动类型',
        path: '/activity_nav',
      },
      {
        name: '活动列表',
        path: '/theme',
      },
      {
        name: '投票管理',
        path: '/vote_list',
      },
      {
        name: '拉人活动配置',
        path: '/laren_activity',
      },
      {
        name: '激活码活动配置',
        path: '/code_activity',
      },
      {
        name: '活动兑换码管理',
        path: '/iqiyi_code',
      },
      {
        name: '雪碧活动配置',
        path: '/summer',
      },
      {
        name: '排行榜活动',
        path: '/ranking',
      },
      {
        name: '雪碧UTC活动配置',
        path: '/coal',
      },
      {
        name: '大话活动配置',
        path: '/dh_config',
      },
      {
        name: '大话活动统计',
        path: '/dh_list',
      },
      {
        name: '短期卡活动管理',
        path: '/bd_activity',
      },
      {
        name: '兑换码管理',
        path: '/bd_code',
      },
      {
        name: 'beta购卡续期配置',
        path: '/renewal',
      },
      {
        name: '单月活动卡配置',
        path: '/moon_card',
      },
      {
        name: '积分公益',
        path: '/public_welfare',
      },
      {
        name: '广告牌',
        path: '/billboard',
      },
      {
        name: '福利日历',
        path: '/calendar',
      },
      {
        name: '会员大使',
        path: '/promotion',
      },
      {
        name: '口令管理',
        path: '/password',
      },
      {
        name: '组队活动',
        path: '/team',
      },
      {
        name: '游戏同行',
        path: '/companion'
      },
      {
        name: '阴阳师主题船',
        path: '/night_tour'
      }
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'gameManage',
    name: '游戏管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '游戏分类',
        path: '/game_type',
      },
      {
        name: '游戏库',
        path: '/games_manager',
      },
      {
        name: '游戏专题',
        path: '/game_theme',
      },
      {
        name: 'VIP会员礼包',
        path: '/game_code',
      },
      {
        name: '热门游戏',
        path: '/hot_games',
      },
      {
        name: '礼包专区配置',
        path: '/game_code_s',
      },
      {
        name: '游戏预约管理',
        path: '/game_reservation',
      },
      {
        name: '游戏广场导航',
        path: '/game_nav',
      },
      {
        name: '游戏推荐栏目',
        path: '/game_recommend',
      },
      {
        name: '游戏文章列表',
        path: '/game_article',
      },
      {
        name: '文章管理',
        path: '/article_manager',
      },
      {
        name: '游戏广场话筒给你',
        path: '/game_comment',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'giftConfigure',
    name: '游戏礼包配置',
    icon: 'CompassOutlined',
    children: [
      {
        name: '游戏礼包内容配置',
        path: '/game_gift',
      },
      {
        name: '游戏礼包接口配置',
        path: '/game_gift_interface',
      },
      {
        name: '游戏礼包领取记录',
        path: '/game_gift_records',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'operateManage',
    name: '运营管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '场景推送配置',
        path: '/push_manage/0',
      },
      {
        name: '公告管理',
        path: '/proclamation_list',
      },
      {
        name: '系统消息管理',
        path: '/system_msg',
      },
      {
        name: '评论管理',
        path: '/comment_list',
      },
      {
        name: '用户组管理',
        path: '/user_group',
      },
      {
        name: '用户信息查询',
        path: '/user_list',
      },
      {
        name: '运营积分补偿查询',
        path: '/compensation_list',
      },
      {
        name: '运营积分补偿',
        path: '/compensation',
      },
      {
        name: '微信公众号绑定',
        path: '/wechat_binding',
      },
      {
        name: '提现管理',
        path: '/withdraw/0',
      },
      {
        name: '支付宝提现管理',
        path: '/alipay'
      }
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'homeManage',
    name: '首页管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: 'banner',
        path: '/banner_list/1',
      },
      {
        name: '弹窗管理',
        path: '/pop_up',
      },
      {
        name: '首页模块管理',
        path: '/first_index',
      },
      {
        name: '功能导航管理',
        path: '/fun_nav',
      },
      {
        name: '推广模块管理',
        path: '/spread',
      },
      {
        name: '福利模块管理',
        path: '/welfare/0',
      },
      {
        name: '游戏模块管理',
        path: '/game_module',
      },
      {
        name: '活动模块管理',
        path: '/activity',
      },
      {
        name: '积分购模块管理',
        path: '/mall_module',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'memberManage',
    name: '大网易超级会员',
    icon: 'CompassOutlined',
    children: [
      {
        name: '超级会员设置',
        path: '/super_vip_set/0',
      },
      {
        name: '续费活动',
        path: '/super_renew_activity'
      },
      {
        name: '会员卡类型配置',
        path: '/super_vip_type_config',
      },
      {
        name: '会员卡cps渠道配置',
        path: '/super_vip_cps_config',
      },
      {
        name: '超级会员订单查询',
        path: '/super_vip_order',
      },
      {
        name: 'iOS退款检测',
        path: '/refund_order',
      },
      {
        name: '异常订单',
        path: '/abnormal_order',
      },
      {
        name: '超级会员管理',
        path: '/super_vip_manager',
      },
      {
        name: '游戏会员权益配置',
        path: '/super_vip_rights/1',
      },
      {
        name: '游戏礼包配置',
        path: '/super_vip_bag',
      },
      {
        name: '游戏专属商城配置',
        path: '/super_vip_shop',
      },
      {
        name: '第三方产品调用权限管理',
        path: '/product_permission',
      },
      {
        name: '游戏调用权限管理',
        path: '/game_permission',
      },
      {
        name: '白名单设置',
        path: '/super_vip_white_list',
      },
      {
        name: '游戏内购入口设置',
        path: '/game_buy_entry',
      },
      {
        name: '共享卡活动配置',
        path: '/super_vip_share_config',
      },
      {
        name: '共享卡活动数据',
        path: '/super_vip_share_list',
      },
      {
        name: '会员卡优惠券管理',
        path: '/vip_coupon',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'superMe',
    name: '至尊会员',
    icon: 'CompassOutlined',
    children: [
      {
        name: '至尊会员配置后台',
        path: '/ssvip_set',
      },
      {
        name: '至尊会员审核后台',
        path: '/ssvip_check',
      },
      {
        name: '至尊会员白名单',
        path: '/ssvip_white_list',
      },
      {
        name: '至尊会员尊享礼遇',
        path: '/ssvip_product',
      },
      {
        name: '至尊会员专属活动',
        path: '/ssvip_exclusive_activity',
      },
      {
        name: '线下体验店活动管理',
        path: '/ssvip_shop',
      },
      {
        name: '至尊会员线下活动管理',
        path: '/ssvip_activity',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'customerCenter',
    name: '客服中心',
    icon: 'CompassOutlined',
    children: [
      {
        name: '文档标签',
        path: '/file_tags',
      },
      {
        name: '帮助文档',
        path: '/help_files',
      },
      {
        name: '用户反馈',
        path: '/advice',
      },
      {
        name: '服务工单',
        path: '/customer_orders/0',
      },
      {
        name: '常见QA',
        path: '/qa_page',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'systemConfigure',
    name: '系统设置',
    icon: 'CompassOutlined',
    children: [
      {
        name: '游戏广场配置',
        path: '/square_settings',
      },
      {
        name: 'VIP权益配置',
        path: '/vips_list',
      },
      {
        name: '内嵌版设置',
        path: '/game_settings',
      },
      {
        name: '游戏信息配置',
        path: '/games',
      },
      {
        name: '内嵌版入口配置',
        path: '/game_entrance',
      },
      {
        name: '签到配置',
        path: '/check_in_setting',
      },
      {
        name: '异常警告配置',
        path: '/warn',
      },
      {
        name: '奇遇点检验备份表',
        path: '/check_credit',
      },
      {
        name: '奇遇点失效业务监控',
        path: '/credit_expire',
      },
      {
        name: '访问渠道配置',
        path: '/channel',
      },
      {
        name: '头像配置',
        path: '/avatar',
      },
      {
        name: '头像框配置',
        path: '/avatar-frame',
      },
      {
        name: '版本展示配置',
        path: '/version_show',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'powerManage',
    name: '权限管理',
    icon: 'CompassOutlined',
    children: [
      {
        name: '账号管理',
        path: '/account_list',
      },
      {
        name: '角色管理',
        path: '/role_list',
      },
    ]
  },
  {
    path: '/jf-platform-api/admin',
    key: 'securityCenter',
    name: '安全中心',
    icon: 'CompassOutlined',
    children: [
      {
        name: '安全设置',
        path: '/security_config',
      },
      {
        name: '反作弊校验',
        // name: '账号绑定手机设置',
        path: '/phone_security',
      },
      {
        name: '登录风控监控',
        path: '/login_security_list',
      },
      {
        name: '消费风控监控',
        path: '/consume_security_list',
      },
      {
        name: '黑名单管理',
        path: '/black_list',
      },
    ]
  },
];

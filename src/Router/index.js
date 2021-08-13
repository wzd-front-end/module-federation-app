import {jfFederationPath} from "../utils/common";

export const routerConfig = [
  {
    path: jfFederationPath,
    key: 'basics',
    name: '基础配置',
    icon: 'CompassOutlined',
    children: [
      {
        federation: true,
        name: '存储配置',
        path: '/store',
      }
    ]
  },
  {
    path: jfFederationPath,
    key: 'appManage',
    name: 'app后台管理',
    icon: 'LaptopOutlined',
    children: [
      {
        federation: true,
        name: 'IOS版本更新',
        path: '/app_ios',
      },
      {
        federation: true,
        name: '安卓版本更新',
        path: '/app_addroid',
      },
      {
        federation: true,
        name: 'APP广告开屏管理',
        path: '/app_ad',
      },
      {
        federation: true,
        name: 'APP首页管理',
        path: '/app_index',
      },
      {
        federation: true,
        name: 'APP2.0首页管理',
        path: '/app_module',
      },
      {
        federation: true,
        name: 'APP消息推送',
        path: '/app_push',
      },
      {
        federation: true,
        name: 'APP消息推送配置',
        path: '/app_push_setting',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'fkConfigure',
    name: '方块养成配置',
    icon: 'BlockOutlined',
    children: [
      {
        federation: true,
        name: '基础配置',
        path: '/lucky_pig/index/0',
      },
      {
        federation: true,
        name: '寻宝配置',
        path: '/lucky_pig/treasure',
      },
      {
        federation: true,
        name: '装扮配置',
        path: '/lucky_pig/dress_up',
      },
      {
        federation: true,
        name: '留言管理',
        path: '/lucky_pig/msg',
      },
      {
        federation: true,
        name: '榜单导出',
        path: '/lucky_pig/export',
      },
      {
        federation: true,
        name: '方块运营补偿',
        path: '/lucky_pig/exp',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'goodsManage',
    name: '商品管理',
    icon: 'ShoppingOutlined',
    children: [
      {
        federation: true,
        name: '商品管理',
        path: '/goods_list',
      },
      {
        federation: true,
        name: '类目管理',
        path: '/category_list',
      },
      {
        federation: true,
        name: '积分兑换商品列表',
        path: '/ex_goods_list',
      },
      {
        federation: true,
        name: '积分夺宝商品列表',
        path: '/group_goods_list',
      },
      {
        federation: true,
        name: '兑换商品库存增补任务',
        path: '/stock/ex/0',
      },
      {
        federation: true,
        name: '夺宝商品库存增补任务',
        path: '/stock/rob/0',
      },
      {
        federation: true,
        name: '抽奖商品库存增补任务',
        path: '/stock/draw/0',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'orderManage',
    name: '订单管理',
    icon: 'ContainerOutlined',
    children: [
      {
        federation: true,
        name: '订单查询',
        path: '/query_order',
      },
      {
        federation: true,
        name: '待发货订单',
        path: '/undelivered_order',
      },
      {
        federation: true,
        name: '已发货订单',
        path: '/delivered_order',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'shoppingMall',
    name: '商城2.0',
    icon: 'ShopOutlined',
    children: [
      {
        federation: true,
        name: '类目管理',
        path: '/product_category',
      },
      {
        federation: true,
        name: '严选商品列表',
        path: '/yx_goods_list/0',
      },
      {
        federation: true,
        name: '严选对接配置',
        path: '/yx_config',
      },
      {
        federation: true,
        name: '订单管理',
        path: '/shop_order',
      },
      {
        federation: true,
        name: '数据导出',
        path: '/data_export',
      },
      {
        federation: true,
        name: '优惠券管理',
        path: '/coupon_manage',
      },
      {
        federation: true,
        name: '商城优惠券管理',
        path: '/shop_coupon_manage',
      },
      {
        federation: true,
        name: '运营发放优惠券',
        path: '/system_coupon_manage',
      },
      {
        federation: true,
        name: '奇遇折扣屋',
        path: '/discount_house/0',
      },
      {
        federation: true,
        name: '卡牌秒杀活动后台',
        path: '/flush_sale/0',
      },
      {
        federation: true,
        name: '一键加购管理',
        path: '/batch_add_goods',
      },
      {
        federation: true,
        name: '凑单专区',
        path: '/order_making_up',
      },
      {
        federation: true,
        name: '商城首页管理',
        path: '/mall_home_manage',
      },
      {
        federation: true,
        name: '盲盒配置',
        path: '/blind_box',
      },
      {
        federation: true,
        name: '盲盒订单',
        path: '/blind_box/order',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'welfareManage',
    name: '福利管理',
    icon: 'CoffeeOutlined',
    children: [
      {
        federation: true,
        name: '福利栏目',
        path: '/column_list',
      },
      {
        federation: true,
        name: '抽奖管理',
        path: '/lottery',
      },
      {
        federation: true,
        name: '必中抽奖管理',
        path: '/must_hit'
      },
      {
        federation: true,
        name: '竞拍管理',
        path: '/auction/0',
      },
      {
        federation: true,
        name: '竞拍短信验证配置',
        path: '/auction_config',
      },
      {
        federation: true,
        name: '限时兑换',
        path: '/time_limit_good',
      },
      {
        federation: true,
        name: '奇遇榜设置',
        path: '/lucky_list_setting',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'activityManage',
    name: '活动管理',
    icon: 'NotificationOutlined',
    children: [
      {
        federation: true,
        name: '活动类型',
        path: '/activity_nav',
      },
      {
        federation: true,
        name: '活动列表',
        path: '/theme',
      },
      {
        federation: true,
        name: '投票管理',
        path: '/vote_list',
      },
      {
        federation: true,
        name: '拉人活动配置',
        path: '/laren_activity',
      },
      {
        federation: true,
        name: '激活码活动配置',
        path: '/code_activity',
      },
      {
        federation: true,
        name: '活动兑换码管理',
        path: '/iqiyi_code',
      },
      {
        federation: true,
        name: '雪碧活动配置',
        path: '/summer',
      },
      {
        federation: true,
        name: '排行榜活动',
        path: '/ranking',
      },
      {
        federation: true,
        name: '雪碧UTC活动配置',
        path: '/coal',
      },
      {
        federation: true,
        name: '大话活动配置',
        path: '/dh_config',
      },
      {
        federation: true,
        name: '大话活动统计',
        path: '/dh_list',
      },
      {
        federation: true,
        name: '短期卡活动管理',
        path: '/bd_activity',
      },
      {
        federation: true,
        name: '兑换码管理',
        path: '/bd_code',
      },
      {
        federation: true,
        name: 'beta购卡续期配置',
        path: '/renewal',
      },
      {
        federation: true,
        name: '单月活动卡配置',
        path: '/moon_card',
      },
      {
        federation: true,
        name: '积分公益',
        path: '/public_welfare',
      },
      {
        federation: true,
        name: '广告牌',
        path: '/billboard',
      },
      {
        federation: true,
        name: '福利日历',
        path: '/calendar',
      },
      {
        federation: true,
        name: '会员大使',
        path: '/promotion',
      },
      {
        federation: true,
        name: '口令管理',
        path: '/password',
      },
      {
        federation: true,
        name: '组队活动',
        path: '/team',
      },
      {
        federation: true,
        name: '游戏同行',
        path: '/companion'
      },
      {
        federation: true,
        name: '阴阳师主题船',
        path: '/night_tour'
      }
    ]
  },
  {
    path: jfFederationPath,
    key: 'gameManage',
    name: '游戏管理',
    icon: 'SmileOutlined',
    children: [
      {
        federation: true,
        name: '游戏分类',
        path: '/game_type',
      },
      {
        federation: true,
        name: '游戏库',
        path: '/games_manager',
      },
      {
        federation: true,
        name: '游戏专题',
        path: '/game_theme',
      },
      {
        federation: true,
        name: 'VIP会员礼包',
        path: '/game_code',
      },
      {
        federation: true,
        name: '热门游戏',
        path: '/hot_games',
      },
      {
        federation: true,
        name: '礼包专区配置',
        path: '/game_code_s',
      },
      {
        federation: true,
        name: '游戏预约管理',
        path: '/game_reservation',
      },
      {
        federation: true,
        name: '游戏广场导航',
        path: '/game_nav',
      },
      {
        federation: true,
        name: '游戏推荐栏目',
        path: '/game_recommend',
      },
      {
        federation: true,
        name: '游戏文章列表',
        path: '/game_article',
      },
      {
        federation: true,
        name: '文章管理',
        path: '/article_manager',
      },
      {
        federation: true,
        name: '游戏广场话筒给你',
        path: '/game_comment',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'giftConfigure',
    name: '游戏礼包配置',
    icon: 'GiftOutlined',
    children: [
      {
        federation: true,
        name: '游戏礼包内容配置',
        path: '/game_gift',
      },
      {
        federation: true,
        name: '游戏礼包接口配置',
        path: '/game_gift_interface',
      },
      {
        federation: true,
        name: '游戏礼包领取记录',
        path: '/game_gift_records',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'operateManage',
    name: '运营管理',
    icon: 'DesktopOutlined',
    children: [
      {
        federation: true,
        name: '场景推送配置',
        path: '/push_manage/0',
      },
      {
        federation: true,
        name: '公告管理',
        path: '/proclamation_list',
      },
      {
        federation: true,
        name: '系统消息管理',
        path: '/system_msg',
      },
      {
        federation: true,
        name: '评论管理',
        path: '/comment_list',
      },
      {
        federation: true,
        name: '用户组管理',
        path: '/user_group',
      },
      {
        federation: true,
        name: '用户信息查询',
        path: '/user_list',
      },
      {
        federation: true,
        name: '运营积分补偿查询',
        path: '/compensation_list',
      },
      {
        federation: true,
        name: '运营积分补偿',
        path: '/compensation',
      },
      {
        federation: true,
        name: '微信公众号绑定',
        path: '/wechat_binding',
      },
      {
        federation: true,
        name: '提现管理',
        path: '/withdraw/0',
      },
      {
        federation: true,
        name: '支付宝提现管理',
        path: '/alipay'
      }
    ]
  },
  {
    path: jfFederationPath,
    key: 'homeManage',
    name: '首页管理',
    icon: 'HomeOutlined',
    children: [
      {
        federation: true,
        name: 'banner',
        path: '/banner_list/1',
      },
      {
        federation: true,
        name: '弹窗管理',
        path: '/pop_up',
      },
      {
        federation: true,
        name: '首页模块管理',
        path: '/first_index',
      },
      {
        federation: true,
        name: '功能导航管理',
        path: '/fun_nav',
      },
      {
        federation: true,
        name: '推广模块管理',
        path: '/spread',
      },
      {
        federation: true,
        name: '福利模块管理',
        path: '/welfare/0',
      },
      {
        federation: true,
        name: '游戏模块管理',
        path: '/game_module',
      },
      {
        federation: true,
        name: '活动模块管理',
        path: '/activity',
      },
      {
        federation: true,
        name: '积分购模块管理',
        path: '/mall_module',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'memberManage',
    name: '大网易超级会员',
    icon: 'UserAddOutlined',
    children: [
      {
        federation: true,
        name: '超级会员设置',
        path: '/super_vip_set/0',
      },
      {
        federation: true,
        name: '续费活动',
        path: '/super_renew_activity'
      },
      {
        federation: true,
        name: '会员卡类型配置',
        path: '/super_vip_type_config',
      },
      {
        federation: true,
        name: '会员卡cps渠道配置',
        path: '/super_vip_cps_config',
      },
      {
        federation: true,
        name: '超级会员订单查询',
        path: '/super_vip_order',
      },
      {
        federation: true,
        name: 'iOS退款检测',
        path: '/refund_order',
      },
      {
        federation: true,
        name: '异常订单',
        path: '/abnormal_order',
      },
      {
        federation: true,
        name: '超级会员管理',
        path: '/super_vip_manager',
      },
      {
        federation: true,
        name: '游戏会员权益配置',
        path: '/super_vip_rights/1',
      },
      {
        federation: true,
        name: '游戏礼包配置',
        path: '/super_vip_bag',
      },
      {
        federation: true,
        name: '游戏专属商城配置',
        path: '/super_vip_shop',
      },
      {
        federation: true,
        name: '第三方产品调用权限管理',
        path: '/product_permission',
      },
      {
        federation: true,
        name: '游戏调用权限管理',
        path: '/game_permission',
      },
      {
        federation: true,
        name: '白名单设置',
        path: '/super_vip_white_list',
      },
      {
        federation: true,
        name: '游戏内购入口设置',
        path: '/game_buy_entry',
      },
      {
        federation: true,
        name: '共享卡活动配置',
        path: '/super_vip_share_config',
      },
      {
        federation: true,
        name: '共享卡活动数据',
        path: '/super_vip_share_list',
      },
      {
        federation: true,
        name: '会员卡优惠券管理',
        path: '/vip_coupon',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'superMe',
    name: '至尊会员',
    icon: 'UsergroupAddOutlined',
    children: [
      {
        federation: true,
        name: '至尊会员配置后台',
        path: '/ssvip_set',
      },
      {
        federation: true,
        name: '至尊会员审核后台',
        path: '/ssvip_check',
      },
      {
        federation: true,
        name: '至尊会员白名单',
        path: '/ssvip_white_list',
      },
      {
        federation: true,
        name: '至尊会员尊享礼遇',
        path: '/ssvip_product',
      },
      {
        federation: true,
        name: '至尊会员专属活动',
        path: '/ssvip_exclusive_activity',
      },
      {
        federation: true,
        name: '线下体验店活动管理',
        path: '/ssvip_shop',
      },
      {
        federation: true,
        name: '至尊会员线下活动管理',
        path: '/ssvip_activity',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'customerCenter',
    name: '客服中心',
    icon: 'WhatsAppOutlined',
    children: [
      {
        federation: true,
        name: '文档标签',
        path: '/file_tags',
      },
      {
        federation: true,
        name: '帮助文档',
        path: '/help_files',
      },
      {
        federation: true,
        name: '用户反馈',
        path: '/advice',
      },
      {
        federation: true,
        name: '服务工单',
        path: '/customer_orders/0',
      },
      {
        federation: true,
        name: '常见QA',
        path: '/qa_page',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'systemConfigure',
    name: '系统设置',
    icon: 'SettingOutlined',
    children: [
      {
        federation: true,
        name: '游戏广场配置',
        path: '/square_settings',
      },
      {
        federation: true,
        name: 'VIP权益配置',
        path: '/vips_list',
      },
      {
        federation: true,
        name: '内嵌版设置',
        path: '/game_settings',
      },
      {
        federation: true,
        name: '游戏信息配置',
        path: '/games',
      },
      {
        federation: true,
        name: '内嵌版入口配置',
        path: '/game_entrance',
      },
      {
        federation: true,
        name: '签到配置',
        path: '/check_in_setting',
      },
      {
        federation: true,
        name: '异常警告配置',
        path: '/warn',
      },
      {
        federation: true,
        name: '奇遇点检验备份表',
        path: '/check_credit',
      },
      {
        federation: true,
        name: '奇遇点失效业务监控',
        path: '/credit_expire',
      },
      {
        federation: true,
        name: '访问渠道配置',
        path: '/channel',
      },
      {
        federation: true,
        name: '头像配置',
        path: '/avatar',
      },
      {
        federation: true,
        name: '头像框配置',
        path: '/avatar-frame',
      },
      {
        federation: true,
        name: '版本展示配置',
        path: '/version_show',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'powerManage',
    name: '权限管理',
    icon: 'ToolOutlined',
    children: [
      {
        federation: true,
        name: '账号管理',
        path: '/account_list',
      },
      {
        federation: true,
        name: '角色管理',
        path: '/role_list',
      },
    ]
  },
  {
    path: jfFederationPath,
    key: 'securityCenter',
    name: '安全中心',
    icon: 'VerifiedOutlined',
    children: [
      {
        federation: true,
        name: '安全设置',
        path: '/security_config',
      },
      {
        federation: true,
        name: '反作弊校验',
        // name: '账号绑定手机设置',
        path: '/phone_security',
      },
      {
        federation: true,
        name: '登录风控监控',
        path: '/login_security_list',
      },
      {
        federation: true,
        name: '消费风控监控',
        path: '/consume_security_list',
      },
      {
        federation: true,
        name: '黑名单管理',
        path: '/black_list',
      },
    ]
  },
];


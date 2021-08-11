import {jfFederationPath} from "../utils/common";

export const routerConfig = [
  {
    key: 'basics',
    name: '基础配置',
    icon: 'CompassOutlined',
    children: [
      {
        name: '存储配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/store',
          }
        ]
      }
    ]
  },
  {
    key: 'appManage',
    name: 'app后台管理',
    icon: 'LaptopOutlined',
    children: [
      {
        name: 'IOS版本更新',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_ios',
          }
        ]
      },
      {
        name: '安卓版本更新',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_addroid',
          }
        ]
      },
      {
        name: 'APP广告开屏管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_ad',
          }
        ]
      },
      {
        name: 'APP首页管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_index',
          }
        ]
      },
      {
        name: 'APP2.0首页管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_module',
          }
        ]
      },
      {
        name: 'APP消息推送',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_push',
          }
        ]
      },
      {
        name: 'APP消息推送配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/app_push_setting',
          }
        ]
      },
    ]
  },
  {
    key: 'fkConfigure',
    name: '方块养成配置',
    icon: 'BlockOutlined',
    children: [
      {
        name: '基础配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/index/0',
          }
        ]
      },
      {
        name: '寻宝配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/treasure',
          }
        ]
      },
      {
        name: '装扮配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/dress_up',
          }
        ]
      },
      {
        name: '留言管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/msg',
          }
        ]
      },
      {
        name: '榜单导出',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/export',
          }
        ]
      },
      {
        name: '方块运营补偿',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_pig/exp',
          }
        ]
      },
    ]
  },
  {
    key: 'goodsManage',
    name: '商品管理',
    icon: 'ShoppingOutlined',
    children: [
      {
        name: '商品管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/goods_list',
          }
        ]
      },
      {
        name: '类目管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/category_list',
          }
        ]
      },
      {
        name: '积分兑换商品列表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ex_goods_list',
          }
        ]
      },
      {
        name: '积分夺宝商品列表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/group_goods_list',
          }
        ]
      },
      {
        name: '兑换商品库存增补任务',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/stock/ex/0',
          }
        ]
      },
      {
        name: '夺宝商品库存增补任务',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/stock/rob/0',
          }
        ]
      },
      {
        name: '抽奖商品库存增补任务',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/stock/draw/0',
          }
        ]
      },
    ]
  },
  {
    key: 'orderManage',
    name: '订单管理',
    icon: 'ContainerOutlined',
    children: [
      {
        name: '订单查询',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/query_order',
          }
        ]
      },
      {
        name: '待发货订单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/undelivered_order',
          }
        ]
      },
      {
        name: '已发货订单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/delivered_order',
          }
        ]
      },
    ]
  },
  {
    key: 'shoppingMall',
    name: '商城2.0',
    icon: 'ShopOutlined',
    children: [
      {
        name: '类目管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/product_category',
          }
        ]
      },
      {
        name: '严选商品列表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/yx_goods_list/0',
          }
        ]
      },
      {
        name: '严选对接配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/yx_config',
          }
        ]
      },
      {
        name: '订单管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/shop_order',
          }
        ]
      },
      {
        name: '数据导出',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/data_export',
          }
        ]
      },
      {
        name: '优惠券管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/coupon_manage',
          }
        ]
      },
      {
        name: '商城优惠券管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/shop_coupon_manage',
          }
        ]
      },
      {
        name: '运营发放优惠券',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/system_coupon_manage',
          }
        ]
      },
      {
        name: '奇遇折扣屋',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/discount_house/0',
          }
        ]
      },
      {
        name: '卡牌秒杀活动后台',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/flush_sale/0',
          }
        ]
      },
      {
        name: '一键加购管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/batch_add_goods',
          }
        ]
      },
      {
        name: '凑单专区',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/order_making_up',
          }
        ]
      },
      {
        name: '商城首页管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/mall_home_manage',
          }
        ]
      },
      {
        name: '盲盒配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/blind_box',
          }
        ]
      },
      {
        name: '盲盒订单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/blind_box/order',
          }
        ]
      },
    ]
  },
  {
    key: 'welfareManage',
    name: '福利管理',
    icon: 'CoffeeOutlined',
    children: [
      {
        name: '福利栏目',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/column_list',
          }
        ]
      },
      {
        name: '抽奖管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lottery',
          }
        ]
      },
      {
        name: '必中抽奖管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/must_hit'
          }
        ]
      },
      {
        name: '竞拍管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/auction/0',
          }
        ]
      },
      {
        name: '竞拍短信验证配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/auction_config',
          }
        ]
      },
      {
        name: '限时兑换',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/time_limit_good',
          }
        ]
      },
      {
        name: '奇遇榜设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/lucky_list_setting',
          }
        ]
      },
    ]
  },
  {
    key: 'activityManage',
    name: '活动管理',
    icon: 'NotificationOutlined',
    children: [
      {
        name: '活动类型',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/activity_nav',
          }
        ]
      },
      {
        name: '活动列表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/theme',
          }
        ]
      },
      {
        name: '投票管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/vote_list',
          }
        ]
      },
      {
        name: '拉人活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/laren_activity',
          }
        ]
      },
      {
        name: '激活码活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/code_activity',
          }
        ]
      },
      {
        name: '活动兑换码管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/iqiyi_code',
          }
        ]
      },
      {
        name: '雪碧活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/summer',
          }
        ]
      },
      {
        name: '排行榜活动',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ranking',
          }
        ]
      },
      {
        name: '雪碧UTC活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/coal',
          }
        ]
      },
      {
        name: '大话活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/dh_config',
          }
        ]
      },
      {
        name: '大话活动统计',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/dh_list',
          }
        ]
      },
      {
        name: '短期卡活动管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/bd_activity',
          }
        ]
      },
      {
        name: '兑换码管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/bd_code',
          }
        ]
      },
      {
        name: 'beta购卡续期配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/renewal',
          }
        ]
      },
      {
        name: '单月活动卡配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/moon_card',
          }
        ]
      },
      {
        name: '积分公益',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/public_welfare',
          }
        ]
      },
      {
        name: '广告牌',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/billboard',
          }
        ]
      },
      {
        name: '福利日历',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/calendar',
          }
        ]
      },
      {
        name: '会员大使',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/promotion',
          }
        ]
      },
      {
        name: '口令管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/password',
          }
        ]
      },
      {
        name: '组队活动',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/team',
          }
        ]
      },
      {
        name: '游戏同行',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/companion'
          }
        ]
      },
      {
        name: '阴阳师主题船',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/night_tour'
          }
        ]
      }
    ]
  },
  {
    key: 'gameManage',
    name: '游戏管理',
    icon: 'SmileOutlined',
    children: [
      {
        name: '游戏分类',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_type',
          }
        ]
      },
      {
        name: '游戏库',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/games_manager',
          }
        ]
      },
      {
        name: '游戏专题',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_theme',
          }
        ]
      },
      {
        name: 'VIP会员礼包',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_code',
          }
        ]
      },
      {
        name: '热门游戏',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/hot_games',
          }
        ]
      },
      {
        name: '礼包专区配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_code_s',
          }
        ]
      },
      {
        name: '游戏预约管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_reservation',
          }
        ]
      },
      {
        name: '游戏广场导航',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_nav',
          }
        ]
      },
      {
        name: '游戏推荐栏目',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_recommend',
          }
        ]
      },
      {
        name: '游戏文章列表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_article',
          }
        ]
      },
      {
        name: '文章管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/article_manager',
          }
        ]
      },
      {
        name: '游戏广场话筒给你',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_comment',
          }
        ]
      },
    ]
  },
  {
    key: 'giftConfigure',
    name: '游戏礼包配置',
    icon: 'GiftOutlined',
    children: [
      {
        name: '游戏礼包内容配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_gift',
          }
        ]
      },
      {
        name: '游戏礼包接口配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_gift_interface',
          }
        ]
      },
      {
        name: '游戏礼包领取记录',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_gift_records',
          }
        ]
      },
    ]
  },
  {
    key: 'operateManage',
    name: '运营管理',
    icon: 'DesktopOutlined',
    children: [
      {
        name: '场景推送配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/push_manage/0',
          }
        ]
      },
      {
        name: '公告管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/proclamation_list',
          }
        ]
      },
      {
        name: '系统消息管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/system_msg',
          }
        ]
      },
      {
        name: '评论管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/comment_list',
          }
        ]
      },
      {
        name: '用户组管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/user_group',
          }
        ]
      },
      {
        name: '用户信息查询',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/user_list',
          }
        ]
      },
      {
        name: '运营积分补偿查询',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/compensation_list',
          }
        ]
      },
      {
        name: '运营积分补偿',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/compensation',
          }
        ]
      },
      {
        name: '微信公众号绑定',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/wechat_binding',
          }
        ]
      },
      {
        name: '提现管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/withdraw/0',
          }
        ]
      },
      {
        name: '支付宝提现管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/alipay'
          }
        ]
      }
    ]
  },
  {
    key: 'homeManage',
    name: '首页管理',
    icon: 'HomeOutlined',
    children: [
      {
        name: 'banner',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/banner_list/1',
          }
        ]
      },
      {
        name: '弹窗管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/pop_up',
          }
        ]
      },
      {
        name: '首页模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/first_index',
          }
        ]
      },
      {
        name: '功能导航管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/fun_nav',
          }
        ]
      },
      {
        name: '推广模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/spread',
          }
        ]
      },
      {
        name: '福利模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/welfare/0',
          }
        ]
      },
      {
        name: '游戏模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_module',
          }
        ]
      },
      {
        name: '活动模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/activity',
          }
        ]
      },
      {
        name: '积分购模块管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/mall_module',
          }
        ]
      },
    ]
  },
  {
    key: 'memberManage',
    name: '大网易超级会员',
    icon: 'UserAddOutlined',
    children: [
      {
        name: '超级会员设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_set/0',
          }
        ]
      },
      {
        name: '续费活动',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_renew_activity'
          }
        ]
      },
      {
        name: '会员卡类型配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_type_config',
          }
        ]
      },
      {
        name: '会员卡cps渠道配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_cps_config',
          }
        ]
      },
      {
        name: '超级会员订单查询',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_order',
          }
        ]
      },
      {
        name: 'iOS退款检测',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/refund_order',
          }
        ]
      },
      {
        name: '异常订单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/abnormal_order',
          }
        ]
      },
      {
        name: '超级会员管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_manager',
          }
        ]
      },
      {
        name: '游戏会员权益配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_rights/1',
          }
        ]
      },
      {
        name: '游戏礼包配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_bag',
          }
        ]
      },
      {
        name: '游戏专属商城配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_shop',
          }
        ]
      },
      {
        name: '第三方产品调用权限管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/product_permission',
          }
        ]
      },
      {
        name: '游戏调用权限管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_permission',
          }
        ]
      },
      {
        name: '白名单设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_white_list',
          }
        ]
      },
      {
        name: '游戏内购入口设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_buy_entry',
          }
        ]
      },
      {
        name: '共享卡活动配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_share_config',
          }
        ]
      },
      {
        name: '共享卡活动数据',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/super_vip_share_list',
          }
        ]
      },
      {
        name: '会员卡优惠券管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/vip_coupon',
          }
        ]
      },
    ]
  },
  {
    key: 'superMe',
    name: '至尊会员',
    icon: 'UsergroupAddOutlined',
    children: [
      {
        name: '至尊会员配置后台',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_set',
          }
        ]
      },
      {
        name: '至尊会员审核后台',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_check',
          }
        ]
      },
      {
        name: '至尊会员白名单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_white_list',
          }
        ]
      },
      {
        name: '至尊会员尊享礼遇',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_product',
          }
        ]
      },
      {
        name: '至尊会员专属活动',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_exclusive_activity',
          }
        ]
      },
      {
        name: '线下体验店活动管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_shop',
          }
        ]
      },
      {
        name: '至尊会员线下活动管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/ssvip_activity',
          }
        ]
      },
    ]
  },
  {
    key: 'customerCenter',
    name: '客服中心',
    icon: 'WhatsAppOutlined',
    children: [
      {
        name: '文档标签',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/file_tags',
          }
        ]
      },
      {
        name: '帮助文档',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/help_files',
          }
        ]
      },
      {
        name: '用户反馈',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/advice',
          }
        ]
      },
      {
        name: '服务工单',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/customer_orders/0',
          }
        ]
      },
      {
        name: '常见QA',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/qa_page',
          }
        ]
      },
    ]
  },
  {
    key: 'systemConfigure',
    name: '系统设置',
    icon: 'SettingOutlined',
    children: [
      {
        name: '游戏广场配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/square_settings',
          }
        ]
      },
      {
        name: 'VIP权益配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/vips_list',
          }
        ]
      },
      {
        name: '内嵌版设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_settings',
          }
        ]
      },
      {
        name: '游戏信息配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/games',
          }
        ]
      },
      {
        name: '内嵌版入口配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/game_entrance',
          }
        ]
      },
      {
        name: '签到配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/check_in_setting',
          }
        ]
      },
      {
        name: '异常警告配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/warn',
          }
        ]
      },
      {
        name: '奇遇点检验备份表',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/check_credit',
          }
        ]
      },
      {
        name: '奇遇点失效业务监控',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/credit_expire',
          }
        ]
      },
      {
        name: '访问渠道配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/channel',
          }
        ]
      },
      {
        name: '头像配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/avatar',
          }
        ]
      },
      {
        name: '头像框配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/avatar-frame',
          }
        ]
      },
      {
        name: '版本展示配置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/version_show',
          }
        ]
      },
    ]
  },
  {
    key: 'powerManage',
    name: '权限管理',
    icon: 'ToolOutlined',
    children: [
      {
        name: '账号管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/account_list',
          }
        ]
      },
      {
        name: '角色管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/role_list',
          }
        ]
      },
    ]
  },
  {
    key: 'securityCenter',
    name: '安全中心',
    icon: 'VerifiedOutlined',
    children: [
      {
        name: '安全设置',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/security_config',
          }
        ]
      },
      {
        name: '反作弊校验',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/phone_security',
          }
        ]
      },
      {
        name: '登录风控监控',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/login_security_list',
          }
        ]
      },
      {
        name: '消费风控监控',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/consume_security_list',
          }
        ]
      },
      {
        name: '黑名单管理',
        federation: true,
        path: jfFederationPath,
        children: [
          {
            path: '/black_list',
          }
        ]
      },
    ]
  },
];

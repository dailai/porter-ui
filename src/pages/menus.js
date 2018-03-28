export default [
    {
        key: 'sysmenu',
        text: '全部菜单',
        icon: 'global',
        path: '',
    },
    {
        key: 'sysmenu-home',
        parentKey: 'sysmenu',
        text: '首页',
        icon: 'home',
        path: '/',
    },
    {
        key: 'sysmenu-synch',
        parentKey: 'sysmenu',
        text: '同步管理',
        icon: 'sync',
        path: '/synchTask',
    },
    {
        key: 'sysmenu-synch-task',
        parentKey: 'sysmenu-synch',
        text: '任务管理',
        icon: 'fa-tasks',
        path: '/synchTask',
    },
    {
        key: 'sysmenu-cluster',
        parentKey: 'sysmenu',
        text: '集群管理',
        icon: 'fa-cubes',
        path: '/monitor',
    },
    {
        key: 'sysmenu-cluster-node',
        parentKey: 'sysmenu-cluster',
        text: '同步节点管理',
        icon: 'scan',
        path: '/nodeCluster',
    },
    {
        key: 'sysmenu-config',
        parentKey: 'sysmenu',
        text: '配置管理',
        icon: 'fa-gears',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-config-source',
        parentKey: 'sysmenu-config',
        text: '数据源配置',
        icon: 'fa-sliders',
        path: '/dataSource',
    },
    {
        key: 'sysmenu-config-table',
        parentKey: 'sysmenu-config',
        text: '数据表配置',
        icon: 'api',
        path: '/dataTable',
    },
    {
        key: 'sysmenu-config-all',
        parentKey: 'sysmenu-config',
        text: '全局配置',
        icon: 'fa-database',
        path: '/globalConfig',
    },
    {
        key: 'sysmenu-monitor',
        parentKey: 'sysmenu',
        text: '监控管理',
        icon: 'line-chart',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-monitor-log',
        parentKey: 'sysmenu-monitor',
        text: '运行日志',
        icon: 'calendar',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-monitor-task',
        parentKey: 'sysmenu-monitor',
        text: '任务监控',
        icon: 'fa-dashboard',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-monitor-node',
        parentKey: 'sysmenu-monitor',
        text: '节点监控',
        icon: 'dot-chart',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-setup',
        parentKey: 'sysmenu',
        text: '系统设置',
        icon: 'setting',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-setup-permis',
        parentKey: 'sysmenu-setup',
        text: '权限管理',
        icon: 'key',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-setup-person',
        parentKey: 'sysmenu-setup',
        text: '个人设置',
        icon: 'fa-user-md',
        path: '/serviceTree',
    },
    {
        key: 'sysmenu-setup-iconfont',
        parentKey: 'sysmenu',
        text: 'iconfont',
        icon: 'fa-user-md',
        path: '/iconfont',
    }
];

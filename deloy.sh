#!/bin/bash
echo "请选择技术方案 vue or react or gulp or lib"
read name
if [ $name == 'vue' ]
then
   git clone git@github.com:MrXujiang/vue_muti_cli.git
elif [ $name == 'react' ]
then
   git clone git@github.com:MrXujiang/webpack3_react.git
elif [ $name == 'gulp' ]
then
   git clone git@github.com:MrXujiang/gulp4_multi_pages.git
elif [ $name == 'lib' ]
then
   git clone git@github.com:MrXujiang/timeout_rollup.git
else
   echo "输入不合法"
fi
export default {
  // 打开/关闭实时路况
  trafficLayer: null,
  drawTrafficLayer(boolean) {
    if (boolean) {
      this.trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      map.add(this.trafficLayer);//添加图层到地图
    } else {
      map.remove(this.trafficLayer);
    }
  },
  districtMap() {
    AMap.plugin('AMap.DistrictSearch', function () {
      var districtSearch = new AMap.DistrictSearch({
        // 关键字对应的行政区级别，country表示国家
        extensions: 'all',
        //  显示下级行政区级数，1表示返回下一级行政区
        subdistrict: 0
      })
      districtSearch.search('上海市', function (status, result) {
        var outer = [
          new AMap.LngLat(-360, 90, true),
          new AMap.LngLat(-360, -90, true),
          new AMap.LngLat(360, -90, true),
          new AMap.LngLat(360, 90, true)
        ]
        var holes = result.districtList[0].boundaries
        var pathArray = [outer]
        pathArray.push.apply(pathArray, holes)
        // pathArray.push([
        //   new AMap.LngLat(121.399444, 30.649842, true),
        //   new AMap.LngLat(122.230285, 30.552916, true),
        //   new AMap.LngLat(122.07373, 30.864625, true),
        // ])
        let polygon = new AMap.Polygon({
          pathL: pathArray,
          strokeColor: 'red',//城市边界颜色
          strokeOpacity: 0,
          fillColor: '#1C44b3', // 遮罩背景色黑色
          fillOpacity: 0.8
        })
        polygon.setPath(pathArray)
        map.add(polygon)
      })
    })


  },
  // 点位点击事件
  mapPointClick(e) {
    Bus.$emit('mapPointClick', e.target.Ce)
  },
  // 地图位置复原
  gotoBasicPosition() {
    map.panTo([121.390749, 31.106489])
    map.setZoom(10)
  },
  // 路桥-项目
  projectLayer: null,
  projectPointLayer: null,
  drawProject(boolean, data) {
    const map = window.map
    let colorObj = {
      '市政': '#ed1c24',
      '公路': '#ff8103',
      '水运': '#ffff00'
    }
    if (boolean) {
      this.projectLayer = []
      this.projectPointLayer = []

      data.forEach((r, index) => {
        let path = []
        r.gisPoints.forEach(p => path.push(new AMap.LngLat(p.lng, p.lat)))
        let polyline = new AMap.Polyline({
          path: path,
          strokeWeight: 2, // 线条宽度，默认为 1
          strokeColor: colorObj[r.typeNameSync], // 线条颜色
          lineJoin: 'round', // 折线拐点连接处样式
          strokeOpacity: 1,
          title: '建设项目'
        });
        polyline.setExtData(r)
        this.projectLayer.push(polyline)
        polyline.on('click', this.mapPointClick)

        let marker = new AMap.Marker({
          map: map,
          position: path[Math.floor(path.length / 2)],
          offset: new AMap.Pixel(-13, -30),
          title: '建设项目'
        });
        var markerContent = document.createElement("div");
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        if (r.typeNameSync == '市政') {
          markerImg.src = "/scn/file/upload/2q5yj1eeabr4/市政.png";
        }
        if (r.typeNameSync == '公路') {
          markerImg.src = "/scn/file/upload/2q5yj1eeabr4/公路.png";
        }
        if (r.typeNameSync == '水运') {
          markerImg.src = "/scn/file/upload/2q5yj1eeabr4/水运.png";
        }
        markerImg.style.width = "20px";
        markerImg.style.height = "20px";
        markerContent.appendChild(markerImg);
        var markerSpan = document.createElement("span");
        markerSpan.className = 'marker';
        if (data.length == 1) {
          markerSpan.innerHTML = r.name
        } else {
          markerSpan.style.display = 'none'
        }
        markerSpan.style.backgroundColor = colorObj[r.typeNameSync]
        if (r.typeNameSync == '水运') {
          markerSpan.style.color = 'black'
        }
        markerContent.appendChild(markerSpan);
        marker.setContent(markerContent)
        marker.setExtData(r)
        this.projectPointLayer.push(marker);
        marker.on('click', this.mapPointClick)
        marker.on('mouseover', (e) => {
          markerSpan.innerHTML = r.name
          markerSpan.style.display = 'block'
        });
        marker.on('mouseout', (e) => {
          // markerSpan.innerHTML = data.length == 1 ? r.name : index + 1;
          if (data.length == 1) {
            markerSpan.style.display = 'block'
            markerSpan.innerHTML = r.name
          } else {
            markerSpan.style.display = 'none'
          }
        });
      })
      // 单条选中的飞线效果
      if (data.length == 1) {
        let allPath = []
        data.forEach((r, index) => {
          let path = []
          if (!r.gisPoints) return
          r.gisPoints.forEach(p => path.push([p.lng, p.lat]))
          allPath.push({
            "zlevel": 2,
            "coords": path,
          })
        })
        this.drawFlyLine(allPath, colorObj[data[0].typeNameSync])
      }
      map.add(this.projectLayer)
      map.add(this.projectPointLayer)
    } else {
      if (!this.projectLayer) return
      this.drawFlyLine([])
      map.remove(this.projectLayer);
      map.remove(this.projectPointLayer);
    }
  },
  // 飞线效果
  drawFlyLine(data, color) {
    let series = [
      {
        "coordinateSystem": "amap",
        "type": "lines",
        "zlevel": 1,
        "polyline": true,
        "effect": {
          "show": true,
          // "period": 5,
          "constantSpeed": 100,
          "trailLength": 0.1,
          "color": color,
          "symbol": "circle",
          "symbolSize": 5,
          "loop": true
        },
        "lineStyle": {
          "normal": {
            "color": "#a6c84c",
            "width": 0,
            "curveness": 0
          }
        },
        "data": data
      },
    ]
    mapCharts.setOption({
      series: series
    });
  },
};
var fs = require('fs');
var HashMap = require('hashmap');

module.exports = {
    getAllBrandsJson: function (req,callback) {
        var brandsMap = new HashMap();
        fs.readFile('F:\\Semester_3\\Big_data\\project_git\\brand_analytics\\brand_rest\\data.json', (err, data) => {
            if(err) throw err;
        var jsonobj = JSON.parse(data);
        for (var index = 0; index < jsonobj.data.length; index++) {
            bname=jsonobj.data[index].from.name;

            if(!brandsMap.has(bname)){
                if (null !== jsonobj.data[index].num_likes &&
                    undefined !== jsonobj.data[index].num_likes) {
                    var likes = jsonobj.data[index].num_likes;
                }

                if (null !== jsonobj.data[index].comments &&
                    undefined !== jsonobj.data[index].comments) {
                    var comments = jsonobj.data[index].comments.length;
                }

                if (null !== jsonobj.data[index].share_count &&
                    undefined !== jsonobj.data[index].share_count) {
                    var shares = jsonobj.data[index].share_count;
                }

                brandsMap.set(bname,{likes: likes, shares: shares, comments: comments});
            }
            else {
                if (null !== jsonobj.data[index].num_likes &&
                    undefined !== jsonobj.data[index].num_likes) {
                    brandsMap.get(bname).likes += jsonobj.data[index].num_likes;
                }

                if (null !== jsonobj.data[index].comments &&
                    undefined !== jsonobj.data[index].comments) {
                    brandsMap.get(bname).comments += jsonobj.data[index].comments.length;
                }

                if (null !== jsonobj.data[index].share_count &&
                    undefined !== jsonobj.data[index].share_count) {
                    brandsMap.get(bname).shares += jsonobj.data[index].share_count;
                }
            }
        }
         callback(brandsMap);
      });
    },
    getBrandJson: function (req,callback) {
        var brandList = [];
        fs.readFile('F:\\Semester_3\\Big_data\\project_git\\brand_analytics\\brand_rest\\data.json', (err, data) => {
            if(err) throw err;
        var jsonobj = JSON.parse(data);
        for (var index = 0; index < jsonobj.data.length; index++) {
            bname = jsonobj.data[index].from.name;

            if (bname.toUpperCase() ===
                                req.params.brand.toUpperCase()) {
                var brand = {photo: '', likes: 0, shares: 0, comments: 0};

                if (null !== jsonobj.data[index].photo_link &&
                    undefined !== jsonobj.data[index].photo_link) {
                    brand.photo = jsonobj.data[index].photo_link;
                }

                if (null !== jsonobj.data[index].num_likes &&
                    undefined !== jsonobj.data[index].num_likes) {
                    brand.likes = jsonobj.data[index].num_likes;
                }

                if (null !== jsonobj.data[index].comments &&
                    undefined !== jsonobj.data[index].comments) {
                    brand.comments = jsonobj.data[index].comments.length;
                }

                if (null !== jsonobj.data[index].share_count &&
                    undefined !== jsonobj.data[index].share_count) {
                    brand.shares = jsonobj.data[index].share_count;
                }

                brandList.push(brand);
            }
        }
        callback(brandList);
      });
    }
}
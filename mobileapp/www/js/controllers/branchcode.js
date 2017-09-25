angular.module('branchcode.controllers', [])

    .controller('branchcodeCtrl', function ($scope, $state, httpservices, $ionicLoading) {
        // $scope.reviewStar = 4;
        var obj = { req_url: URL + "Entidad/100", data: '' }
        var TempData = [];
        $ionicLoading.show({
            templateUrl: 'templates/loading.html'

        });
        httpservices.getData(obj).then(function (res) {
            $ionicLoading.hide();
            console.log(res)
            $scope.branchName = res.data;
            TempData = res.data;
        })

        //   $scope.branchName= [{"Tipo": 1, "SitioDireccion": "Comuna2, Vicente L\u00f3pez 2050, 3er piso, CABA", "Lon": -58.399464, "Lat": -34.593943, "SitioNombre": "Comuna 2", "Error": "", "SitioID": 2, "EntidadID": 100}, {"Tipo": 1, "SitioDireccion": "Htal. Elizalde, Manuel A. Montes de Oca 40, CABA", "Lon": -58.399464, "Lat": -34.593943, "SitioNombre": "Elizalde", "Error": "", "SitioID": 3, "EntidadID": 100}, {"Tipo": 1, "SitioDireccion": "Registro Civil, Uruguay 753, CABA", "Lon": -58.399464, "Lat": -34.593943, "SitioNombre": "RegistroCivilSC", "Error": "", "SitioID": 100, "EntidadID": 100}, {"Tipo": 1, "SitioDireccion": "Infracciones DG, Hip\u00f3lito Yrigoyen 2346, CABA", "Lon": -58.399464, "Lat": -34.593943, "SitioNombre": "DGAI", "Error": "", "SitioID": 300, "EntidadID": 100}]
        // TempData=$scope.branchName;
        $scope.searchBranch = function (name) {
            // obj = { req_url: URL + "GetBranchList/" + name, data: '' }
            // console.log(name);
            // if (name == '') {
            //     obj = { req_url: URL + "GetBranchList/''" + name, data: '' }
            // }
            // httpservices.getData(obj).then(function (res) {
            //     $scope.branchName = res.data.GetBranchListResult;
            // })
            var FilteredData = [];
            if (name != '') {
                angular.forEach(TempData, function (val, ind) {
                    var inputString = val.SitioDireccion.toUpperCase();
                    if (inputString.indexOf(name.toUpperCase()) > -1) {
                        FilteredData.push(val);
                    }
                });
                $scope.branchName = FilteredData;
            }
            else {
                $scope.branchName = TempData;
            }
        }
        $scope.reportEvent = function(event)  {
            console.log('Reporting : ' + event.type);
          //  alert(event.type);
            window.history.go(-1)
            // $timeout(function() {
            //   $scope.data[event.type]++;
            // })
          }
        $scope.goToTicketSearch = function (value) {
            $ionicLoading.show({
                templateUrl: 'templates/loading.html'

            });
            obj = { req_url: URL + "Sitio/" + value.SitioID, data: {} }
            httpservices.getData(obj).then(function (res) {
                $ionicLoading.hide();
                console.log(res)
                $state.go("ticketNoSearch", { branchName: JSON.stringify(value) })
                $scope.branchName = res.data;
            })

        }

    })
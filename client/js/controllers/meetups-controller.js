function meetupsController($scope) {

  $scope.meetups = [
    {name: "MEAN SF Developers"},
    {name: "Some other Meetup"}
  ]

  $scope.createMeetup = function () {
    $scope.meetups.push({name: $scope.meetupName});
    $scope.meetupName = "";
  }
}
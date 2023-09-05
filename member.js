function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'app/components/skills-member/skills-member.html',
        controller: function ($scope) {
            $scope.$watch('member', function (member) {
                if (member) {
                    $scope.skills = member.skills;
                }
            });
        }
    };
}
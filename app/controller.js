function ListController() {
    this.insertText = '';
    this.items = [
        {name: 'Entry1'}
    ];
    this.addItem = function() {
        this.items.push({name: this.insertText});
    };
    this.clearItems = function() {
        this.items = [];
    };
    this.containerTap = function() {
        this.items = [];
    };
    this.itemTap = function(item) {
        item.name += ' tapped';
    };
    this.groups = function() {
        return groupBy(this.items, function(item) {
            return item.name.charAt(0);
        });
    };
    this.isSelected = function(item) {
        return item && item.name == this.selectedName;
    }
}

function ToolbarsController() {
    this.clicked = function() {
        alert("clicked");
    }
}

function FormController() {
    this.rankStore = [
        { rank : 'master',  title : 'Master'},
        { rank : 'padawan', title : 'Student'},
        { rank : 'teacher', title : 'Instructor'},
        { rank : 'aid',     title : 'Assistant'}
    ];
}

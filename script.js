

(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        // do whatever you want with the value
        console.log(this.value);
        this.likes = 0;
        this.hoursAgo = 0;
        var addList = document.getElementById('commentForumId');
        var newDiv = document.createElement('div');
        var postedDiv = document.createElement('div');
        var upperDiv = document.createElement('div');
        var lowerDiv = document.createElement('div');


        var replyButton = document.createElement('span');
        replyButton.innerHTML = 'Reply';
        replyButton.onclick = 
        function replyFunction(event){
            console.log('event',event);
            event.preventDefault();
            var newIpTag = document.createElement('input');
            var itm = document.getElementById('originalCommentsContainer');
            var cln = itm.cloneNode(true);
            this.parentElement.appendChild(cln);

            this.parentElement.addEventListener('keydown', function(ev) {
                if(ev.keyCode === 13){
                    console.log('nested reply value',ev.target.value);
                    alert('nested value to be appended by calling the outer scope function');
                }
            })

        }  
        

        var shareButton = document.createElement('span');
        shareButton.innerHTML = 'Share';
        shareButton.onclick = 
        function shareFunction(){
            alert('share functionality not yet implemented');
        } 


        postedDiv.innerHTML = this.value;
        
        upperDiv.innerHTML = '<strong>Devdutta Natu</strong>               ' + this.hoursAgo     + 'hours ago';
        
        var upvote = document.createElement('button');
        var downvote = document.createElement('button');
        upvote.innerHTML = 'Upvote';
        downvote.innerHTML = 'Downvote';
        upvote.onclick = function(){this.likes += 1;}
        
        downvote.onclick = function(){
            var self = this;
            
            console.log('self.likes',self.likes);
        }



        lowerDiv.innerHTML = this.likes;
        lowerDiv.appendChild(upvote);
        lowerDiv.appendChild(downvote);
        lowerDiv.appendChild(replyButton);
        lowerDiv.appendChild(shareButton);



        newDiv.appendChild(upperDiv);
        newDiv.appendChild(postedDiv);
        newDiv.appendChild(lowerDiv);

        addList.appendChild(newDiv);

        var original = document.getElementById('originalCommentsContainer');


        //original.style.width = '60%';
        //addList.appendChild(original);
        
        this.value = '';  

    }
  });
})();
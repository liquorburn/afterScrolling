var afterScrolling = { 
			_timeouts: {},
			set: function(name, func, time, repeat) { 
				repeat = undefined === repeat ? false : true;
				time = undefined === time ? 10 : time;
				this._timeouts[name] = { 
					pending: true, 
					fn: func, 
					repeat: repeat 
				};
				var tobj = this._timeouts[name], that = this;
				function exec(tobj, that) {
					tobj.timeout !== undefined && that.clear(name);
					tobj.timeout = !that.hasRun(name) && setTimeout(function() { 
						tobj.fn.call(arguments);
						that.clear(name);
						if ( false === tobj.pending ) {
							window.removeEventListener('scroll', arguments.callee);
							delete tobj;
						}
					}, time);
				}
				window.addEventListener('scroll', exec.bind(null, tobj, that));
			},
			hasRun: function(name) { 
				if ( this._timeouts[name] )
					return !this._timeouts[name].pending;
				return -1;
			},
			clear: function(name) {
				if ( this._timeouts[name] && this._timeouts[name].repeat ) {
					clearTimeout(this._timeouts[name].timeout); 
					this._timeouts[name].pending = true;
				} else if ( this._timeouts[name] )
					this._timeouts[name].pending = false;
				return true;
			}
		};
